import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button';

const BootstrapCard = props => {
  return (

    <Col>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={props.url} />
    </Card>

    <Accordion>
      <Card style={{ width: '20rem' }}>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          <strong>Click me to Learn More...</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
              <Card.Title><strong>Title: </strong>{props.title}</Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroupItem><strong>Owner: </strong>{props.owner}</ListGroupItem>
                <ListGroupItem><strong>Views: </strong>{props.views}</ListGroupItem>
                <ListGroupItem><strong>Date: </strong>{props.views}</ListGroupItem>
              </ListGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </Col>
  );
}

export default BootstrapCard;