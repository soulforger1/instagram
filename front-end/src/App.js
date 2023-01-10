import React, { useEffect } from 'react';
import { Routes, Route ,BrowserRouter as Router , Switch , Link} from "react-router-dom";
import { HomePage } from './pages/home-page';
import PostPage from './pages/post-page';
import { SignInPage } from './pages/sign-in-page';
import { SignUpPage } from './pages/sign-up-page';
import { useNavigate } from 'react-router-dom';
import './styles/App.css';

const App = () => {

  const navigate = useNavigate()

  useEffect( () => {
    if(localStorage.getItem("uid")) {
      navigate('/home')
    } else {
      navigate('/signIn')
    }

  },[])

  return (
 
      <Routes>

        <Route path="/" element={<SignInPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/post" element={<PostPage/>} />

      </Routes>

  );
}

export default App;
