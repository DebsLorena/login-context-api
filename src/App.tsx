import React from 'react';
import './App.css';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedLayout } from './components/Protected';
import Login from './components/Login';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          <Route path='/profile'  element={<ProtectedLayout><h2>Este é o componente profile!</h2></ProtectedLayout> }>
          </Route>

          <Route path='/login' element={<Login />} ></Route>

        </Routes>
      </Router>
    </AuthProvider >
  );
}

export default App;
