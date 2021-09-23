export interface Post {
  _id: string;
  userId: string;
  desc: string;
  img: string;
  likes: Array<string>;
  createdAt: string;
  _v: number;
}

export interface User {
  city?: string;
  coverPicture?: string;
  createdAt: string;
  email: string;
  followers: Array<string>;
  followings: Array<string>;
  from: string;
  isAdmin: boolean;
  profilePicture: string;
  updatedAt: string;
  username: string;
  _v: number;
  _id: string;
}
