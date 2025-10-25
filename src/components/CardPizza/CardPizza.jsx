import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
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
            <ListGroup.Item>{props.ingredients}</ListGroup.Item>
            <ListGroup.Item>{props.price}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Ver más</Card.Link>
            <Card.Link href="#">Añadir</Card.Link>
          </Card.Body>
        </Card>
      </>
    );
}
