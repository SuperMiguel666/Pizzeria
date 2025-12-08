import React, { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../contexts/CartContext";
import { useParams} from 'react-router-dom';


function Pizza() { 
    
    const { id } = useParams(); 

    const [pizza, setPizza] = useState(null); 
    const [loading, setLoading] = useState(true);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        if (id) {
            DetallePizza(id);
        }
    }, [id]);

    const DetallePizza = async (pizzaId) => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`); 
            if (!response.ok) {
                setLoading(false);
                return;
            }
            const data = await response.json();
            setPizza(data); 
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    if (loading) return <p>Cargando información de la pizza...</p>;
    if (!pizza) return <p>Pizza no encontrada. :(</p>;

    const { name, price, desc, img, ingredients } = pizza;

    
    const validIngredients = ingredients || []; 


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
                    <Button 
                    variant="primary"
                    style={{ backgroundColor: "#FF8C00", border: "none" }}
                    onClick={() => addToCart(pizza)}
                    >
                        Añadir
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Pizza;