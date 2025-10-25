import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import CustomNavbar from './components/CustomNavbar/CustomNavbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomNavbar></CustomNavbar>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
