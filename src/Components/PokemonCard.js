import { Card, Button } from 'react-bootstrap';
import React from 'react';
import {Link} from 'react-router-dom';

export default function PokemonCard(props) {
    return (
        <Card style={{ width: '12em' }} bg="light" border="light">
            <Card.Img src={props.image} alt={props.name} />
            <Link to="" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Card.Link href={"/" + props.name}>Pokemon Details</Card.Link>
            </Card.Footer>
        </Card> 
    )
}
