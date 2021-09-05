import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { currentUserSelector } from '../redux/slice/loginUser';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useSelector(currentUserSelector);
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
