import React from 'react';
import PropTypes from 'prop-types';
import styles from './Impressum.module.scss';
import { Form, Button, Card, Alert, ListGroup } from 'react-bootstrap'

const Impressum = () => (
  <Card>
    <Card.Body>
      <h2 className="text-center mb-4">Impressum</h2>

      <h3 className="mb-4">Members</h3>
      <ListGroup>
        <ListGroup.Item>Felix Felbermayer</ListGroup.Item>
        <ListGroup.Item>Ferdinand Schimana</ListGroup.Item>
        <ListGroup.Item>Stefan Maier</ListGroup.Item>
      </ListGroup>
    <hr/>
      <h3 className="mb-4">Fachhochschule Salzburg</h3>
      <ListGroup>
        <ListGroup.Item>Urstein Süd 1</ListGroup.Item>
        <ListGroup.Item>5412 Puch</ListGroup.Item>
        <ListGroup.Item><a href="https://fh-salzburg.ac.at">Homepage</a></ListGroup.Item>
      </ListGroup>
    </Card.Body>
  </Card>
);

Impressum.propTypes = {};

Impressum.defaultProps = {};

export default Impressum;
