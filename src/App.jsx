import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Cart from "./pages/Cart/Cart";
import Pizza from "./pages/Pizza/Pizza";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import { UserContext } from "./contexts/UserContext";

function App() {
  const { token } = useContext(UserContext);

  return (
    <>
      <CustomNavbar></CustomNavbar>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        
        {/* Rutas Públicas Protegidas: Si hay token (logueado), redirige a Home */}
        <Route 
          path="/login" 
          element={token ? <Navigate to={'/'} /> : <LoginPage />} 
        />
        <Route 
          path="/register" 
          element={token ? <Navigate to={'/'} /> : <RegisterPage />} 
        />
        
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/pizza/:id" element={<Pizza />} />
        
        {/* Ruta Privada Protegida: Si NO hay token (deslogueado), redirige a /login */}
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to={"/login"} />} 
        />
        
        <Route path="/404" element={<NotFound></NotFound>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;