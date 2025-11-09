import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function ItemCart(props) {
const { 
    img, 
    name, 
    price, 
    id, 
    quantity, 
    handleAddition, 
    handleSubstract,
  } = props;

  return (
    <div> 
       
    <Container>
      <Row className="d-flex align-items-center" >
        <Col> <Image src={props.img}  thumbnail  width={"120px"} /></Col>
        <Col><h6>{props.name}</h6></Col>
        <Col> ${props.price.toLocaleString("es-CL")} </Col>
        
        <Col>
        <Container>
        <Row>
            <Col><Button variant="primary" onClick={() => handleAddition(id)} >+</Button></Col>
            <Col><p>Cantidad: {props.quantity} </p></Col>
            <Col><Button variant="danger" onClick={() => handleSubstract(id)}>-</Button></Col>
            </Row>

        </Container>
        
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default ItemCart