import { axiosClient } from './index';

export const loginUserReq = (data) => {
  return axiosClient.post('/auth/login', JSON.stringify(data), {
    withCredentials: true,
  });
};

export const refreshTokenReq = () => {
  return axiosClient.post('/auth/refresh-token', null, {
    withCredentials: true,
  });
};

export const registerUserReq = (data) => {
  return axiosClient.post('/auth/register', JSON.stringify(data));
};

export const checkUsernameReq = (data) => {
  return axiosClient.post('/auth/checkname', JSON.stringify(data));
};

export const checkUserEmailReq = (data) => {
  return axiosClient.post('/auth/checkemail', JSON.stringify(data));
};

export const logOutReq = () => {
  return axiosClient.post('/auth/logout', null, {
    withCredentials: true,
  });
};
