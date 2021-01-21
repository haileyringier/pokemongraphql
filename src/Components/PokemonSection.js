import React from 'react';
import PokemonCard from './PokemonCard';
import { Row } from 'react-bootstrap'

export default function PokemonSection(props) {

    const renderPokemon = () => props.pokemon.map(pokemon => {
        return <ul className="list-group mb-4"><PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} /> </ul>
    })

    return (
        <Row className="pokemon-row">
            {renderPokemon()}
        </Row>
    )
}
