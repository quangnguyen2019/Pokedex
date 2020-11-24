import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Badge, Spinner } from 'reactstrap';
import axios from 'axios';

import './PokemonDetails.css';

export default function PokemonDetails(props) {
    const [info, setInfo] = useState({});
    const { id } = useParams();
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${id}`;

    useEffect(() => {
        async function fetchData() {
            let pokemon = 
                props.pokemons.find(value => value.id === parseInt(id)) ||
                await axios.get(urlPokemon).then(res => res.data);
            setInfo(pokemon);
        }
        fetchData();
    }, [id, props.pokemons, urlPokemon]);

    return(
        <div className="pokemon-details mt-5">
            {   
                info && Object.keys(info).length > 0 &&
                <div className="poke-details">
                    <div className="poke-img">
                        <img src={info.sprites.other["official-artwork"].front_default} alt='' />
                    </div>
                    <div className="poke-name mb-5"> {info.name} </div>
                    <div className="details">
                        <div className = "text-center">
                            {
                                info.types.map((value, index) => {
                                    return (
                                        <Badge color="success" pill className="mr-1 badge" key={index}> 
                                            { value.type.name }
                                        </Badge>
                                    );
                                })
                            }
                        </div>
                        <p> Weight: {info.weight / 10} kg </p>
                        <p> Height: {info.height / 10} m </p>
                        <p> 
                            Abilities: {
                                info.abilities.map((value, index) => {
                                    return <span className="text-capitalize" key={index}> 
                                        { value.ability.name }
                                        { Object.keys(info.abilities).length === index + 1 ? '' : ', ' }
                                    </span>;
                                })
                            } 
                        </p>
                    </div>
                </div>
            }
        </div>
    );
}