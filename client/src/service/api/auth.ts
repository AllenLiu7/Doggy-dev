import { loginFormData, signupFormData } from '../../types/auth.type';
import { axiosClient } from './index';

export const loginUserReq = (data: loginFormData) => {
  return axiosClient.post('/auth/login', JSON.stringify(data), {
    withCredentials: true,
  });
};

export const refreshTokenReq = () => {
  return axiosClient.post('/auth/refresh-token', null, {
    withCredentials: true,
  });
};

export const registerUserReq = (data: signupFormData) => {
  return axiosClient.post('/auth/register', JSON.stringify(data), {
    withCredentials: true,
  });
};

export const checkUsernameReq = (data: string) => {
  return axiosClient.post('/auth/checkname', JSON.stringify(data));
};

export const checkUserEmailReq = (data: string) => {
  return axiosClient.post('/auth/checkemail', JSON.stringify(data));
};

export const logOutReq = () => {
  return axiosClient.post('/auth/logout', null, {
    withCredentials: true,
  });
};
