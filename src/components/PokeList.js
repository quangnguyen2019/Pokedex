import { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

import './PokeList.css';
import PokeListItem from './PokeListItem';

export default class PokeList extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: []
        };
        this.startPosition = 0;
    }

    componentDidMount() {
        this.getData(20);
    }

    getData(limit) {
        // Get data each pokemon
        let endPosition = this.startPosition + limit;

        for (let i = this.startPosition + 1; i <= endPosition; i++) {
            let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${i}`;

            axios
                .get(urlPokemon)
                .then((res) => {
                    this.setState(state => {
                        return {
                            pokemons: [ ...state.pokemons, res.data]
                        }
                    });
                });
        }
        
        this.startPosition = endPosition;
    }

    render() {
        const { pokemons } = this.state;

        return(
            <div className="poke-list">
                { 
                    pokemons.map((item, index) => 
                        <PokeListItem item={item} key={index} />
                    )
                }

                <Button 
                    color="primary" outline 
                    className="mt-3 mb-5"
                    onClick={() => this.getData(20)}
                > 
                    Load More 
                </Button>
            </div>
        );
    }
}