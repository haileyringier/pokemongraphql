import React from 'react';
import {useQuery, gql} from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

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


export default function PokemonDetails(props) {

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
        return (<ListGroup.Item>
                    <p>{move.move.name}</p>
                </ListGroup.Item>)
    })

    const showTypes = () => types.map(type => {
        return (<ListGroup.Item>
                    <p>{type.type.name}</p>
                </ListGroup.Item>)
    })


    return (
        <div>
        <Link className="home-link" to="/">Back to all Pokemon</Link>
        <div className="pokemon-details-card">
            <h2>{name}</h2>
            <h4>Sprites</h4>
                <img src={sprites} />
            <h4>Types</h4>
            <ListGroup horizontal>
                {showTypes()}
            </ListGroup>
            <h3>Moves</h3>
            <ListGroup variant="flush">
                {showMoves()}
            </ListGroup>
        </div>
        </div>
    )
}

