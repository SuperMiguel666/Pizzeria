import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import CustomNavbar from './components/CustomNavbar/CustomNavbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

function App() {

  return (
    <>
      {/* <CustomNavbar></CustomNavbar>
      <Header></Header>
      <Home></Home> */}
      {/* Hito número 2 */}
      {/* <RegisterPage></RegisterPage> */}
      <LoginPage></LoginPage>
      {/* <Footer></Footer> */}
    </>
  )
}

export default App
