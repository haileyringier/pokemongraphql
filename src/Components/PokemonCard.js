import React from 'react';
import {Link} from 'react-router-dom';

export default function PokemonCard(props) {
    return (
        <div>
            <Link to="" />
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name} />
        </div>
    )
}
