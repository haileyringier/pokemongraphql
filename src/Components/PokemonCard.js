import { Card } from 'react-bootstrap';
import React from 'react';

export default function PokemonCard(props) {
    return (
        <Card className="Pokemon-card" style={{ width: '12em' }} bg="light" border="light">
            <Card.Img src={props.image} alt={props.name}/>
            <Card.Body>
                <Card.Title>{props.name.toUpperCase()}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Card.Link href={"/" + props.name}>Pokemon Details</Card.Link>
            </Card.Footer>
        </Card> 
    )
}
