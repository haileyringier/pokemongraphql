import React from 'react';
import PokemonCard from './PokemonCard';
import { CardColumns, Container, Row, Col } from 'react-bootstrap'

export default function PokemonSection(props) {

    const renderPokemon = () => props.pokemon.map(pokemon => {
        return <ul className="list-group mb-4"><PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} /> </ul>
    })

    return (
        <div className='container mt-5'>
            <h2>Pokemon Section</h2>
            {renderPokemon()}
        </div>
    )
}
