import { Redirect, Route, Switch } from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

const PrivateRouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => {
        return true ? (
          <route.component {...props} routes={route.routes} />
        ) : (
          <Redirect to='/' />
        );
      }}
    />
  );
};

// export const RenderRoutes = ({ routes }) => {
//   return (
//     <Switch>
//       {routes.map((route, i) => (
//         <RouteWithSubRoutes key={i} {...route} />
//       ))}
//       {/* <Route path='*'>
//         <div>404</div>
//       </Route> */}
//     </Switch>
//   );
// };

// export const RenderPrivateRoutes = ({ routes }) => {
//   return (
//     <Switch>
//       {routes.map((route, i) => (
//         <PrivateRouteWithSubRoutes key={i} {...route} />
//       ))}
//       {/* <Route path='*'>
//         <div>404</div>
//       </Route> */}
//     </Switch>
//   );
// };

export const RenderRoutes = (routes) => {
  return routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
};

export const RenderPrivateRoutes = (routes) => {
  return routes.map((route, i) => (
    <PrivateRouteWithSubRoutes key={i} {...route} />
  ));
};

export const RenderAll = (publicRoutes, privateRoutes) => {
  const publicArray = RenderRoutes(publicRoutes);
  const privateArray = RenderPrivateRoutes(privateRoutes);
  return [...publicArray, ...privateArray];
};
