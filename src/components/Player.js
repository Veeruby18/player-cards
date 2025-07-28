import React from 'react';
import { Card } from 'react-bootstrap';

export default function Player({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  image
}) {
  return (
    <Card style={{ width: '12rem', margin: '1rem', textAlign: 'center' }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>#{jerseyNumber} &bull; Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
}

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  image: 'https://via.placeholder.com/150'
};
