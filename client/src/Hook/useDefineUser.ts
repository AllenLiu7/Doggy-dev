import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getUserReq } from '../service/api/user';

//set the user according to the comparison of the currentUser._id with the id in the params.

export const useDefineUser = (currentUser) => {
  const [user, setUser] = useState({});
  const [isCurrentUser, setIsCurrentUser] = useState(true);

  const { userId: paramId } = useParams();

  useEffect(() => {
    const defineUser = async () => {
      if (currentUser._id !== paramId) {
        const response = await getUserReq(paramId);
        const user = response.data;
        setIsCurrentUser(false);
        return setUser(user);
      }
      //if currentUser._id === paramId, we are at the currentUser's profile page
      const user = currentUser;
      setIsCurrentUser(true);
      setUser(user);
    };
    defineUser();
  }, [currentUser, paramId]);

  return { user, isCurrentUser, paramId };
};
