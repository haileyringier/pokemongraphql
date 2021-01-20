import React from 'react';
import PokemonSection from './PokemonSection';
import {useQuery, gql} from '@apollo/client';

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
const { loading, error, data } = useQuery(GET_POKEMONS)

if(loading) return <p>Loading...</p>
if (error) return <p>Error</p>

console.log(data.pokemons.results)

    return (
        <div>
            <h1>Pokemon GraphQL</h1>
            <PokemonSection />
        </div>
    )
}
