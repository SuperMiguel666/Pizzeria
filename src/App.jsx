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
import Pizza from './components/Pizza/Pizza'

function App() {

const [infoPizza, setInfoPizza] = useState(null);

  useEffect(() => {
  consultarApi();
  }, []);

  const consultarApi = async () => {
  const url = "http://localhost:5000/api/pizzas/p001";
  const response = await fetch(url);
  const data = await response.json();
  setInfoPizza(data);
  };



  return (
    <>
      <CustomNavbar></CustomNavbar>
      {/* <Header></Header> */}

      {/* Hito número 2 */}
      {/* <RegisterPage></RegisterPage> */}
      {/* <LoginPage></LoginPage> */}


      {/* Hito número 3 */}
      {/* <Home></Home> */}
      {/* <Cart></Cart> */}

      {/* Hito número 4 */}
      {infoPizza && <Pizza pizzaData={infoPizza}></Pizza>}
      <Footer></Footer>
    </>
  )
}

export default App
