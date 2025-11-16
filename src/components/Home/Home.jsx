import React, { useState, useEffect } from "react"; 
import CardPizza from "../CardPizza/CardPizza";
import "./home.css";
import {pizzas} from "../../js/pizzas.js";
import Pizza from "../Pizza/Pizza";

function Home() {
  
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
    <div className="containerCards">
        {/* {
          pizzas.map (pizza => (
                  <CardPizza
                  key={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img}
                  />
          ))
        } */}
              {infoPizza && <Pizza pizzaData={infoPizza}></Pizza>}

      </div>
    </>
  );
}

export default Home;