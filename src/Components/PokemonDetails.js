import React from 'react';
import {useQuery, gql} from '@apollo/client';
import { useParams } from 'react-router-dom';

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


    if(loading){
        return <p>Loading...</p> 
    } else {console.log(data)}
   console.log(data.pokemon.sprites.front_default)

    const moves = data.pokemon.moves
    const types = data.pokemon.types
    const sprites = data.pokemon.sprites.front_default
    
    const showMoves = () => moves.map(move => {
        return (<li>
                    <p>{move.move.name}</p>
                </li>)
    })

    const showTypes = () => types.map(type => {
        return (<li>
                    <p>{type.type.name}</p>
                </li>)
    })


    return (
        <div>
            <h2>{name}</h2>
            <h4>Sprites</h4>
                <img src={sprites} />
            <ul>
                <h3>Moves</h3>
                {showMoves()}
            </ul>
            <ul>
                <h4>Types</h4>
                {showTypes()}
            </ul>
        </div>
    )
}

