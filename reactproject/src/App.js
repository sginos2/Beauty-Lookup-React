import { useContext } from 'react';
import { AuthContext } from './index';
import './App.css';
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Home from './views/public/Home';
import Login from './views/public/Login';
import Profile from './views/protected/Profile';
import Finder from './views/protected/Finder';
// import ProtectedRoute from './components/ProtectedRoute';


function App() {
  const location = useLocation();
  const { isAuthed } = useContext(AuthContext);

  return (
    <div className="App">
      <Menu>
        <Menu.Item name='home' active={location.pathname === '/home'}>
          <Link to='/home'>Home</Link>
        </Menu.Item>
        {
          !isAuthed && (
            <Menu.Item name='login' active={location.pathname === '/login'}>
              <Link to='/login'>Log In</Link>
            </Menu.Item>
          )
        }
        {
          isAuthed && (
            <Menu.Item name='profile' active={location.pathname === '/profile'}>
              <Link to='/profile'>Profile</Link>
            </Menu.Item>
          )
        }
        {
          isAuthed && (
            <Menu.Item name='finder' active={location.pathname === '/finder'}>
              <Link to='/finder'>Finder</Link>
            </Menu.Item>
          )
        }
        {
          isAuthed && (
            <Menu.Item name='logout' active={location.pathname === '/logout'}>
              <Link to='/logout'>Log Out</Link>
            </Menu.Item>
          )
        }
      </Menu>
      <Switch>
        <Route exact path='/home'>
          <Home/>
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/profile'>
          <Profile/>
        </Route>
        <Route exact path='/finder'>
          <Finder/>
        </Route>
        <Route exact path='/logout'>
          <button>Log Out</button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
