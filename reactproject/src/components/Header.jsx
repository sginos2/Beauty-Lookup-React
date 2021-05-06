import { useContext } from 'react';
import { AuthContext } from '../dataLayer/AuthContext';
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Home from '../views/public/Home';
import Login from '../views/public/Login';
import Profile from '../views/protected/Profile';
import Finder from '../views/protected/Finder';
import Logout from '../views/protected/Logout';
import ProtectedRoute from '../components/ProtectedRoute';
import IndividualCosmet from '../views/protected/Cosmetologist';
import logo from '../assets/esthetician.png';

function Header() {
    const location = useLocation();
    const { isAuthed } = useContext(AuthContext);
    return (
        <div className='Header'>
            <Menu borderless>
                <Menu.Item id='logo' name='logo'>
                    <img className='logo' src={logo} alt='logo'></img>
                </Menu.Item>
                <Menu.Item id='title'>
                    <h2>Beauty Look-Up</h2>
                </Menu.Item>
                <Menu.Item link name='home' active={location.pathname === '/home'}>
                    <Link to='/home'><i className="home icon"></i>Home</Link>
                </Menu.Item>
                {
                    isAuthed && (
                        <Menu.Item link name='finder' active={location.pathname === '/finder'}>
                            <Link to='/finder'><i className="search icon"></i>Finder</Link>
                        </Menu.Item>
                    )
                }
                {
                    !isAuthed && (
                        <Menu.Menu position='right'>
                            <Menu.Item link name='login' active={location.pathname === '/login'}>
                                <Link to='/login'><i className="sign in alternate icon"></i>Log In</Link>
                            </Menu.Item>
                        </Menu.Menu>
                    )
                }
                {
                    isAuthed && (
                        <Menu.Menu position='right'>
                            <Menu.Item link name='profile' active={location.pathname === '/profile'}>
                                <Link to='/profile'><i className="user circle icon"></i>Profile</Link>
                            </Menu.Item>
                            <Menu.Item link name='logout' active={location.pathname === '/logout'}>
                                <Link to='/logout'><i className="sign out alternate icon"></i>Log Out</Link>
                            </Menu.Item>
                        </Menu.Menu>
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
                <ProtectedRoute exact path='/profile'>
                    <Profile/>
                </ProtectedRoute>
                <ProtectedRoute exact path='/finder'>
                    <Finder/>
                </ProtectedRoute>
                <ProtectedRoute exact path='/cosmetologist/:id'>
                    <IndividualCosmet/>
                </ProtectedRoute>
                <ProtectedRoute exact path='/finder'>
                    <Finder/>
                </ProtectedRoute>
                <ProtectedRoute exact path='/logout'>
                    <Logout/>
                </ProtectedRoute>
            </Switch>
        </div>
    )
}

export default Header;