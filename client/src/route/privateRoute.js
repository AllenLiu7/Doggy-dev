import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAppSelector } from '../Hook/typedReduxHook';
import { currentUserSelector } from '../redux/slice/loginUser';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useAppSelector(currentUserSelector);
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};

export default PrivateRoute;
