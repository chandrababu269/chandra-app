import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './contexts/AuthContext';
import { render } from '@testing-library/react';

function App() {
  return (
    <AuthProvider>
      <div>
        <h1>Welcome to the Authentication App</h1>
        <Login />
        <Register />
      </div>
    </AuthProvider>
  );
}

export default App;
