import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomNavbar from './components/CustomNavbar/CustomNavbar'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import Cart from './pages/Cart/Cart'
import Pizza from './pages/Pizza/Pizza'
import Profile from './components/Profile/Profile'
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <CustomNavbar></CustomNavbar>
      <Header></Header>

      {/* rutas */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        {/* el componente pizza ya está siendo llamado desde home */}
        {/* <Route path='/pizza/p001' element={<Pizza></Pizza>}></Route> */}
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/404' element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>
    </>
  )
}

export default App
