import { axiosClient } from './index';

export const uploadPostImageReq = (data) => {
  return axiosClient.post('upload/post-image', data);
};

export const uploadProfilePicReq = (data) => {
  return axiosClient.post('upload/profile-pic', data);
};
