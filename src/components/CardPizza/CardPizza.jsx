import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import "./cardpizza.css";


function CardPizza(props) {

   return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Ingredientes: 
              <ul>
              {props.ingredients.map(ingredient => (
                <li key={ingredient}> {ingredient} </li>
              ))}
            </ul>           
            </ListGroup.Item>
            <ListGroup.Item>Precio: ${props.price.toLocaleString("es-CL")}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
          <div className="d-flex gap-2">
          <Button variant="outline-secondary">Ver más</Button>
            <Button variant="primary"  style={{backgroundColor : "#FF8C00", border: "none",}}>Añadir</Button>
            </div>
          </Card.Body>

        </Card>
      </>
    );
}

export default CardPizza;