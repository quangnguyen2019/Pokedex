import { Component } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

import PokeListItem from './PokeListItem';
import './PokeList.css';

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
        pokemons.sort((a, b) => a.id - b.id);

        return(
            <div className="poke-list">
                { 
                    pokemons.map((item, index) => 
                        <PokeListItem item={item} key={index} />
                    )
                }

                <Button 
                    color="primary" outline 
                    className="mt-3 mb-5 btn-load-more"
                    onClick={() => this.getData(20)}
                > 
                    Load More 
                </Button>
            </div>
        );
    }
}