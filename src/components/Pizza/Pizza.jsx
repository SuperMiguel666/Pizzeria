import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function Pizza({ pizzaData }) {
  const { name, price, desc, img, ingredients } = pizzaData;
  return (
    <>
      <Card className="m-5" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
             Ingredientes: 
              <ul>
              {ingredients.map(ingredient => (
                <li key={ingredient}> {ingredient} </li>
              ))}
            </ul>   
          </ListGroup.Item>
          <ListGroup.Item>Precio: ${price.toLocaleString("es-CL")}</ListGroup.Item>
          <ListGroup.Item> Descripción: <br /> {desc}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <div className="d-flex gap-2">
            <Button variant="outline-secondary">Ver más</Button>
            <Button
              variant="primary"
              style={{ backgroundColor: "#FF8C00", border: "none" }}
            >
              Añadir
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Pizza;
