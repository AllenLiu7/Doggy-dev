import { axiosClient } from './index';

export const newPostReq = (newPost) => {
  return axiosClient.post(`post`, newPost);
};

export const getTimelinePostsReq = (id: string) => {
  return axiosClient.get(`post/timeline/${id}`);
};

export const getUnfollowedPostsReq = (id: string) => {
  return axiosClient.get(`post/profile/${id}`);
};

export const updateLikeReq = (postId: string, currentUserId: string) => {
  return axiosClient.put(
    `post/${postId}/like`,
    JSON.stringify({
      userId: currentUserId,
    })
  );
};

export const deletePostsReq = (id: string) => {
  return axiosClient.delete(`post/${id}/delete`);
};
