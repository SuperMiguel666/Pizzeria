// src/components/CardPizza/CardPizza.jsx
import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../contexts/CartContext";
import { Link } from 'react-router-dom';

function CardPizza({ pizzaData = {} }) { 
    
    const { id, name, price, desc, img, ingredients } = pizzaData;
    const { addToCart } = useContext(CartContext); 
    const validIngredients = ingredients || []; 
    
    if (!name) return null; 

    return (
        <Card className="m-5" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    Ingredientes: 
                    <ul>
                        {validIngredients.map((ingredient, index) => (
                            <li key={ingredient || index}> {ingredient} </li> 
                        ))}
                    </ul>   
                </ListGroup.Item>
                <ListGroup.Item>
                    Precio: $
                    {price?.toLocaleString("es-CL")} 
                </ListGroup.Item>
                <ListGroup.Item> Descripción: <br /> {desc}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <div className="d-flex gap-2">
                    <Link to={`/pizza/${id}`}> 
                    <Button variant="outline-secondary">Ver más</Button>
                    </Link>
                    <Button
                        variant="primary"
                        style={{ backgroundColor: "#FF8C00", border: "none" }}
                        onClick={() => addToCart(pizzaData)} 
                    >
                        Añadir
                    </Button>   
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardPizza;