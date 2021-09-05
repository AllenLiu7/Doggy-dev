//import { hot } from 'react-hot-loader/root';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StyledToastContainer from './components/common/toastContainer';
import Home from './page/home';
import Login from './page/login';
import Profile from './page/profile';
import SignUp from './page/signUp';
import PrivateRoute from './route/privateRoute';
import GlobalStyle from './theme/globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <StyledToastContainer />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={SignUp} />
        <PrivateRoute exact path='/app' component={Home} />
        <PrivateRoute exact path='/app/profile/:userId' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
