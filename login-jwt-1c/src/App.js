import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Landing from './pages/Landing';
import PrivateRoute from './routes/PrivateRoute';
import NotFound from './pages/NotFound';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/landing"
            element={
              <PrivateRoute>
                <Landing />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;