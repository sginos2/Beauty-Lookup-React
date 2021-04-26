import React, { useState, createContext } from 'react';

export const AuthContext = createContext({ isAuthed: false, user: {} });

export function AuthProvider(props) {
  const [isAuthed, setIsAuthed] = useState(false);
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider value={{
      isAuthed,
      user,
      login: (user, callback) => {
        setIsAuthed(true);
        setUser(user);
        callback && callback();
      },
      logout: (callback) => {
        setIsAuthed(false);
        setUser({});
        callback && callback();
      }
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}