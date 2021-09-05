import { axiosClient } from './index';

export const uploadPostImageReq = (data) => {
  return axiosClient.post('upload/post_image', data);
};

export const uploadProfilePicReq = (data) => {
  return axiosClient.post('upload/profile_pic', data);
};
