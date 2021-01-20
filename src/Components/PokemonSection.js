import React from 'react';
import PokemonCard from './PokemonCard';

export default function PokemonSection(props) {

    const renderPokemon = () => props.pokemon.map(pokemon => {
        return <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} />
    })

    return (
        <div className="pokemon-section">
            <h2>Pokemon Section</h2>
            {renderPokemon()}
        </div>
    )
}
