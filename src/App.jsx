import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import CustomNavbar from './components/CustomNavbar/CustomNavbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <>
      <CustomNavbar></CustomNavbar>
      {/* <Header></Header> */}

      {/* Hito número 2 */}
      {/* <RegisterPage></RegisterPage> */}
      {/* <LoginPage></LoginPage> */}


      {/* Hito número 3 */}
      {/* <Cart></Cart> */}

      {/* Hito número 4 */}
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
