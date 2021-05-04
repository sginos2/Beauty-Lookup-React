import React, { useState, createContext, useContext } from 'react';
import api from './api';

export const AuthContext = createContext({ isAuthed: false, user: {} });
export const useAuthContext = () => {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [isAuthed, setIsAuthed] = useState(localStorage.getItem('authed'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || '{}'));

  return (
    <AuthContext.Provider value={{
      isAuthed,
      user,
      login: (user, callback) => {
        console.log(user);
        api.post('/login', user).then(response => {
          if (response.authenticated) {
            setIsAuthed(true);
            setUser(response.user);
            callback && callback();
            localStorage.setItem('authed', true);
            localStorage.setItem('user', JSON.stringify(response.user));
          } else {
            setIsAuthed(false);
          }
        })
      },
      logout: (callback) => {
        localStorage.removeItem('authed');
        localStorage.removeItem('user');

        setIsAuthed(false);
        setUser({});
        callback && callback();
      }
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}