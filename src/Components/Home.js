import React, { useState, useEffect } from 'react';
import PokemonSection from './PokemonSection';
import {useQuery, gql} from '@apollo/client';
import Pagination from './Pagination'
import { Container, Row, Col } from 'react-bootstrap';

const GET_POKEMONS = gql`
  query pokemons {
    pokemons {
      results {
        url
        name
        image
      }
    }
  }
`;

export default function Home() {

    const [pokemon, setPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage] = useState(10);

    const { loading, error, data } = useQuery(GET_POKEMONS)

    useEffect(() => {

        if(loading) return <p>Loading...</p>
        if (error) return <p>Error</p>

        setPokemon(data.pokemons.results)
    }, [data, error, loading])

    const indexOfLastPokemon = currentPage * pokemonPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
    const currentPokemon = pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className="home-section">
            <PokemonSection pokemon={currentPokemon}/>
            <Pagination pokemonPerPage={pokemonPerPage} totalPokemon={pokemon.length} paginate={changePage} />
        </div>
    )
}
