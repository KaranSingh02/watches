import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Components/login/login';
import Register from './Components/login/register';
import NavbarPage from './Components/navbar';
import Home from './Components/Home/home';

function App() {
  return (
    <div className="App">
      <NavbarPage/ >
       <BrowserRouter>
                  <Switch>
                    {/* {/* { !check && <Route exact path='/' component={Register} /> } */}
                    <Route exact path='/' component={Home} />
                    <Route exact path='/home' component={Home} />
                    <Route path='/register' component={Register} />
                    {/* <Route path='/success-register' component={Postregister} />
                    <Route path='/reset-password' component={Resetpassword} /> */}
                    {/* <Route path='/settings' component={Settings} /> */}

                    <Route path='/login' component={Login} />
                  
                  </Switch>

          </BrowserRouter>
    </div>
  );
}

export default App;
