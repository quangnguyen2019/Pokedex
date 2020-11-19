import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './PokemonDetails.css';

export default function PokemonDetails () {
    const [info, setInfo] = useState({});
    const { id } = useParams();
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${id}`;

    useEffect(() => {
        axios
            .get(urlPokemon)
            .then((res) => setInfo(() => res.data));
    }, []);

    return(
        <div className="pokemon-details mt-5">
            {   
                Object.keys(info).length > 0 &&
                <div className="poke-details">
                    <div className="poke-img">
                        <img src={info.sprites.front_default} alt='' />
                    </div>
                    <div className="poke-name"> {info.name} </div>
                </div>
            }
        </div>
    );
}