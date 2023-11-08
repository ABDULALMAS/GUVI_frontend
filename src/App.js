import { useEffect, useState } from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import { Container } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch } from 'react-redux';


import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from './components/navbar/Navbar';
import { getProfile } from './actions/profile';


function App() {
  const user = JSON.parse(localStorage.getItem("profile"));


  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getProfile());
},[dispatch]);
  
  return (
    <GoogleOAuthProvider clientId="451541305632-fhfu6mpup3lgicouu3ufm9vr0apb55dm.apps.googleusercontent.com">
      <Router>
        {/* <Container maxWidth="xl"> */}
          
          <Routes>

          <Route
              path="/profile"
              element={ <Navbar /> }
            />
          <Route
              path="/"
              element={!user ? <Auth /> : <Navigate to="/profile" />}
            />
          

          <Route
              path="/auth"
              element={ <Auth /> }
            />
          
          </Routes>
        {/* </Container> */}
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
