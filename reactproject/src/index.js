import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom' 
import 'semantic-ui-css/semantic.min.css';
import { AuthProvider } from './dataLayer/AuthContext';
import { QueryClientProvider, QueryClient } from 'react-query';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client = {client}>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);
reportWebVitals();
