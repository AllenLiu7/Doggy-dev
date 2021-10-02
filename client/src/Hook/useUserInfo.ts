import { useEffect, useState } from 'react';

import { getUserReq } from '../service/api/user';
import { User } from '../types/common.type';

//fetch user info base on userId

export const useUserInfo = (userId: string) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async (userId: string) => {
      const response = await getUserReq(userId);
      setUser(response.data);
    };

    fetchUser(userId);
  }, [userId]);

  return { user };
};
