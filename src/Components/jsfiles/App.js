import '../cssfiles/App.css';
import google from '../image/google.png'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link
} from 'react-router-dom';
import { Signup } from './Signup';
import { Signin } from './Signin';
import { Forgotpass } from './Forgotpass';
import { AuthProvider } from './AuthContext'


function App() {


  return (
    <>
      {/* <Router>
        <Switch>
        <Route exact path='/signin'>
            <Signin />
          </Route>
          
          <Route exact path='/signup'>
            <Signup />
          </Route>

          <Route exact path='/forgot'>
            <Forgotpass/>
          </Route>
        </Switch>
      </Router> */}
      <Router>
        <AuthProvider>
          <Switch>
            {/* <Route path="/" exact component={Profile} /> */}
            <Route path="/signup" component={Signup} />
            <Route path="/forgot" component={Forgotpass} />
            <Route path="/signin" component={Signin} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
