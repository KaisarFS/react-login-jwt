import { createContext, useState } from 'react';

const AuthContext = createContext(); // isAuthenticated, token, login, logout, username

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('Anonym'); 

  const login = (token, enteredUsername) => {
    setToken(token);
    setUsername(enteredUsername); 
    setAuthenticated(true);
  };

  const logout = () => {
    setToken('');
    setUsername(''); 
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export { AuthProvider, AuthContext };