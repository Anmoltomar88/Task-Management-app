import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './Component/navBar/NavBar';
import Home from './Component/home/Home';
import Footer from './Component/footer/Footer';
import About from './Component/about/About';
import SignUp from './Component/signUp/SignUp';
import SignIn from './Component/signIn/SignIn';
import Tasks from './Component/tasks/Tasks';

import { useDispatch } from 'react-redux';
import { authActions } from './Store';

function App() {
  
  const dispatch =useDispatch();

  useEffect(()=>{
  const id=sessionStorage.getItem("id");
    if(id){
      dispatch(authActions.login());
    }
  },[])
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ToastContainer /> {/* Place the ToastContainer at the root level */}
        <Routes>
          <Route exact path='/' element={<Home />} /> {/* slash / make it the initial page */}
          <Route  path='/about' element={<About />} />
          <Route  path='/tasks' element={<Tasks />} />
          <Route  path='/signUp' element={<SignUp />} />
          <Route  path='/signIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;