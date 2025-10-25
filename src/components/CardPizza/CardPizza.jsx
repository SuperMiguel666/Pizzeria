import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import "./cardpizza.css";

export default function CardPizza(props) {
   return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Ingredientes</ListGroup.Item>
            <ListGroup.Item>{props.ingredients.join(", ")}</ListGroup.Item>
            <ListGroup.Item>{props.price.toLocaleString("es-CL")}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
          <div className="d-flex gap-2">
          <Button variant="outline-secondary">Ver más</Button>
            <Button variant="primary">Añadir</Button>
            </div>
          </Card.Body>

        </Card>
      </>
    );
}
