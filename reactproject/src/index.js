import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom' 
import 'semantic-ui-css/semantic.min.css';


export const AuthContext = createContext({ isAuthed: false, user: {} });

function AuthProvider(props) {
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

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
