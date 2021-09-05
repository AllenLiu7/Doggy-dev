import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import GoogleButton from '../components/common/googleButton';
import {
  clearState,
  currentUserSelector,
  loginUserThunk,
  setIntervalId,
  updateToken,
} from '../redux/slice/loginUser';
import { refreshTokenReq } from '../service/api/auth';
import { axiosJWT } from '../service/api/index';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { control, handleSubmit } = useForm();
  const { isSuccess, isError, errorMessage } = useSelector(currentUserSelector);

  const [showPassword, setShowPassword] = useState(false);

  const verifyUser = async () => {
    try {
      const response = await refreshTokenReq();
      const newToken = response.data.token;

      if (newToken) {
        dispatch(updateToken(response.data));

        axiosJWT.defaults.headers.common['authorization'] =
          'Bearer ' + newToken;

        history.push('/app');
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
      return;
    }

    //get AT after login
    //for auth psistance(page refresh or tab close) using refresh token, and refresh both RT and AT
    verifyUser();
  }, [isSuccess, isError]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    dispatch(loginUserThunk(data));
  };

  const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    form: {
      height: 'auto',
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 40,
      borderRadius: 15,
    },
    title: {
      fontWeight: 500,
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Typography
          className={classes.title}
          variant='h2'
          align='left'
          color='primary'
          gutterBottom
        >
          Doggy Book
        </Typography>
        <Typography variant='h5'>
          Welcome to our community. Let us have fun!
        </Typography>
      </Box>
      <Box border={1} ml={20} className={classes.form}>
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='email'
            control={control}
            defaultValue=''
            rules={{
              required: 'Email required',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Not a valid email',
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label='Email'
                variant='outlined'
                fullWidth={true}
                margin='normal'
                required
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />

          <Controller
            name='password'
            control={control}
            defaultValue=''
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'At least 6 characters',
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                type={showPassword ? 'text' : 'password'}
                required
                label='Password'
                variant='outlined'
                fullWidth={true}
                margin='normal'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />

          <Box mt={2}>
            <Button type='submit' fullWidth variant='contained' color='primary'>
              Sign In
            </Button>
          </Box>
          <Box mt={2}>
            <Link to='/signup'>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='secondary'
              >
                Sign Up
              </Button>
            </Link>
            <GoogleButton />
          </Box>
        </form>
      </Box>
    </Box>
  );
}
