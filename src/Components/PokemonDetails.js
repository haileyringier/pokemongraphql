import React from 'react';
import {useQuery, gql} from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { Card } from '@material-ui/core';

const GET_POKEMON_DETAILS = gql`
    query pokemon($name: String!){
        pokemon(name: $name) {
            id
            name
            sprites{
                front_default
            }
            moves {
                move{
                    name
                }
            }
            types {
                type {
                    name
                }
            }
        }
    }
`

export default function PokemonDetails() {

    const { name } = useParams();

    const gqlVariables = {
        name: name
    }

    const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
        variables: gqlVariables
    })

    if(loading) return <p>Loading..</p>
    if (error) return <p>Error</p>

    const moves = data.pokemon.moves
    const types = data.pokemon.types
    const sprites = data.pokemon.sprites.front_default
    
    const showMoves = () => moves.map(move => {
        return <p>{move.move.name}</p>
    })

    const showTypes = () => types.map(type => {
        return <p>{type.type.name}</p>
    })

    return (
        <div>
        <Link className="home-link" to="/">All Pokemon</Link>
        <Card className="pokemon-details-card">
            <h1>{name.toUpperCase()}</h1>
                <img src={sprites} />
            <h3>Types</h3>
            <ListGroup variant="flush">
                {showTypes()}
            </ListGroup>
            <h3>Moves</h3>
            <ListGroup variant="flush">
                {showMoves()}
            </ListGroup>
        </Card>
        </div>
    )
}

