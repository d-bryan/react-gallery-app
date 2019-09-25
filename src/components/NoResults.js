import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// return no results with an easter egg to make it entertaining (of course :))
const NoResults = () => {
  return (
    <Container>
      <Col>
        <Card>
          <Card.Header>404</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                The page that you are looking for cannot be found, please try searching for something else.{' '}
              </p>
              <footer className="blockquote-footer">
                All Sites are meant to be broken <cite title="Source Title"> -- Every Developer Once Said</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default NoResults;