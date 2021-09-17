//import { hot } from 'react-hot-loader/root';
import 'react-toastify/dist/ReactToastify.css';

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StyledToastContainer from './components/common/toastContainer';
import Home from './page/home';
import Login from './page/login';
import PrivateRoute from './route/privateRoute';
import GlobalStyle from './theme/globalStyles';

const Profile = lazy(() => import('./page/profile'));
const SignUp = lazy(() => import('./page/signUp'));

function App() {
  return (
    <Router>
      <GlobalStyle />
      <StyledToastContainer />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/signup' component={SignUp} />
          <PrivateRoute exact path='/app' component={Home} />
          <PrivateRoute exact path='/app/profile/:userId' component={Profile} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
