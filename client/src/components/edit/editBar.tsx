import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { currentUserSelector, updateUser } from '../../redux/slice/loginUser';
import { uploadProfilePicReq } from '../../service/api/upload';
import { editProfileReq } from '../../service/api/user';
import { Card } from '../common/styled-components/card';
const PF = process.env.PROFILE_PIC;

export default function EditBar() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(currentUserSelector);
  const { username, email, city, profilePicture } = currentUser;
  const { control, handleSubmit, register } = useForm();
  const [file, setFile] = useState(PF + profilePicture);
  const image = register('image'); // for react hook form overide bug

  const handleProfilePicChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const onSubmit = async (data) => {
    const file = data.image[0];
    const newData = {
      id: currentUser._id,
      profile: {
        ...data,
      },
    };
    console.log(currentUser.profilePicture);
    //create formData to include the file and the current profile pic filename
    if (file) {
      const formData = new FormData();
      formData.append('profile-pic', file);
      formData.append('currentProfilePic', currentUser.profilePicture);
      try {
        const response = await uploadProfilePicReq(formData);
        newData.profile.profilePicture = response.data.fileName;
      } catch (err) {
        console.log(err);
      }
    }
    //execute axios with the formData
    try {
      const response = await editProfileReq(newData);
      dispatch(updateUser(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Card alignItems='center'>
        <FormWrapper>
          <form
            name='editForm'
            encType='multipart/form-data'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Typography variant='h4' gutterBottom>
              User Info
            </Typography>
            {/* username --------------------------------------------------------------------------------------------*/}
            <Controller
              name='username'
              control={control}
              defaultValue={username}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='User Name'
                  variant='outlined'
                  fullWidth={true}
                  margin='normal'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />

            {/* email --------------------------------------------------------------------------------------------*/}
            <Controller
              name='email'
              control={control}
              defaultValue={email}
              rules={{
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Not a valid email',
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='Email'
                  variant='outlined'
                  fullWidth={true}
                  margin='normal'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />

            {/* city --------------------------------------------------------------------------------------------*/}
            <Controller
              name='city'
              control={control}
              defaultValue={city || ''}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='City'
                  variant='outlined'
                  fullWidth={true}
                  margin='normal'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />

            {/* from --------------------------------------------------------------------------------------------*/}
            <Controller
              name='from'
              control={control}
              defaultValue={city || ''}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='From'
                  variant='outlined'
                  fullWidth={true}
                  margin='normal'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />

            {/* relationship --------------------------------------------------------------------------------------------*/}
            <Controller
              name='relation'
              control={control}
              defaultValue={0 || null}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl
                  variant='outlined'
                  fullWidth={true}
                  margin='normal'
                >
                  <InputLabel id='demo-simple-select-outlined-label'>
                    Relationship
                  </InputLabel>
                  <Select
                    label='Relationship'
                    id='demo-simple-select-filled'
                    value={value || ''}
                    onChange={onChange}
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Single</MenuItem>
                    <MenuItem value={2}>In Relation</MenuItem>
                    <MenuItem value={3}>Married</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <ProfilePicFormWrapper>
              <Typography variant='h6' gutterBottom>
                Profile Picture
              </Typography>
              <ProfilePicWrapper>
                <EditImg src={file} alt='profile' height='100px' />
                <ButtonWrapper>
                  <EditButton>Edit</EditButton>
                  <input
                    {...register('image')}
                    style={{ display: 'none' }}
                    type='file'
                    accept='.png,.jpeg,.jpg'
                    onChange={(e) => {
                      image.onChange(e); // method from hook form register
                      handleProfilePicChange(e); // your method, this will prevent your method overwrites hook form's
                    }}
                  />
                </ButtonWrapper>
              </ProfilePicWrapper>
            </ProfilePicFormWrapper>
            <Box mt={2}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
              >
                Save
              </Button>
            </Box>
          </form>
        </FormWrapper>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  flex: 8;
  display: flex;
  height: auto;
  justify-content: center;
  padding-top: 10px;
`;

const FormWrapper = styled.div`
  padding: 40px 50px;
  width: 70%;
  height: auto;
`;

const ProfilePicFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const ProfilePicWrapper = styled.div`
  position: relative;
  width: auto;
  margin-top: 20px;
  align-self: center;
`;

const ButtonWrapper = styled.label`
  position: absolute;
  top: 0;
  left: 100px;
`;

const EditButton = styled.div`
  cursor: pointer;
`;

const EditImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
`;
