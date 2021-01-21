import React from 'react'

export default function Pagination({ pokemonPerPage, totalPokemon, paginate }) {
    
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a onClick={() => paginate(number)} className="page-link">{number}</a>
                </li>
            ))}
        </ul> 
    )
}
