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
  followers: Array<string> | null | undefined;
  followings: Array<string> | null | undefined;
  from: string;
  isAdmin: boolean;
  profilePicture: string;
  updatedAt: string;
  username: string;
  _v: number;
  _id: string;
}

export interface EditFormData {
  city: string;
  email: string;
  from: string;
  image: FileList;
  relation: number;
  username: string;
  profilePicture: string;
}

export interface EditProfileReqData {
  id: string;
  profile: EditFormData;
}
