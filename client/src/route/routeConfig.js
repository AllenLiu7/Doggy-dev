import { RenderRoutes } from './RenderRoutes';

import Home from '../page/home';
import Profile from '../page/profile';
import Login from '../page/login';

export const privateRoutes = [
  {
    path: '/app',
    key: 'APP',
    component: RenderRoutes,
    routes: [
      {
        path: '/app',
        key: 'APP_ROOT',
        exact: true,
        component: Home,
      },
      {
        path: '/app/profile',
        key: 'APP_PROFILE',
        exact: true,
        component: Profile,
      },
    ],
  },
];

export const publicRoutes = [
  { path: '/', key: 'ROOT', exact: true, component: Login },
  {
    path: '/demo',
    key: 'ROOT_DEMO',
    exact: true,
    component: Login,
  },
];
