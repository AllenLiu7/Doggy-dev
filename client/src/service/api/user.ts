import { axiosClient, axiosJWT } from './index';

export const getUserReq = (id: string) => {
  return axiosClient.get(`/user?userId=${id}`);
};

export const editProfileReq = (data) => {
  return axiosJWT.put(`user/edit_profile`, data, {
    withCredentials: true,
  });
};

export const getFollowingUsersReq = () => {
  return axiosClient.get('user/60ed4aa170b49b2b843f43d6/followings');
};

export const getRecommandUsersReq = (id) => {
  return axiosClient.get(`user/${id}/recommand_users`);
};

export const _unfollowUser = (currentUserId: string, paramId: string) => {
  return axiosClient.put(`user/${currentUserId}/unfollow`, {
    userId: paramId,
  });
};

export const _followUser = (currentUserId: string, paramId: string) => {
  return axiosClient.put(`user/${currentUserId}/follow`, {
    userId: paramId,
  });
};
