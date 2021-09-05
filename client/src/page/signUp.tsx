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
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import GoogleButton from '../components/common/googleButton';
import {
  clearState,
  currentUserSelector,
  signUpUser,
} from '../redux/slice/loginUser';
import { checkUserEmailReq, checkUsernameReq } from '../service/api/auth';

export default function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { control, handleSubmit, watch, setError } = useForm();
  const watchFields = watch(['password']);
  const { isSuccess, isError, errorMessage, currentUser } =
    useSelector(currentUserSelector);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (currentUser) {
      history.push('/app');
    }

    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      history.push('/app');
      dispatch(clearState());
    }
  }, [isError, isSuccess]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    const { username, email } = data;
    const { data: userCheck } = await checkUserEmailReq({ username });
    const { data: emailCheck } = await checkUsernameReq({ email });

    if (userCheck) {
      setError('username', {
        type: 'validate',
        message: 'User name is registered',
      });
    }
    if (emailCheck) {
      setError('email', {
        type: 'validate',
        message: 'Email address is registered',
      });
    }
    if (!userCheck && !emailCheck) {
      console.log(data);
      dispatch(signUpUser(data));
    }
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
      padding: 50,
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
            name='username'
            control={control}
            defaultValue=''
            rules={{
              required: 'User name required',
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label='User Name'
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
                helperText={error ? error.message : 'At least 6 characters'}
              />
            )}
          />

          <Controller
            name='passwordAgain'
            control={control}
            defaultValue=''
            rules={{
              required: 'Password again is required',
              validate: (v) => v === watchFields[0] || "Passwords don't match",
              minLength: {
                value: 6,
                message: 'At least 6 characters',
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                type={showPassword ? 'text' : 'password'}
                required
                label='Password Again'
                variant='outlined'
                fullWidth={true}
                margin='none'
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

          <Box mt={3}>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='secondary'
            >
              Sign Up
            </Button>
            <GoogleButton />
          </Box>
        </form>
      </Box>
    </Box>
  );
}
