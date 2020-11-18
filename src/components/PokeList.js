import { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

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
            let urlPokeForm = `https://pokeapi.co/api/v2/pokemon-form/${i}`;

            axios
                .get(urlPokeForm)
                .then((res) => {
                    this.setState(state => {
                        return {
                            pokemons: [ ...state.pokemons, res.data]
                        }
                    });
                });
        }
        // debugger;
        this.startPosition = endPosition;
    }

    render() {
        const { pokemons } = this.state;
        console.log(pokemons);

        return(
            <div className="poke-list">
                { pokemons.map((item, index) => {
                    return(
                        <div className="poke-list-item" key={index}>
                            <div className='poke-img'>
                                <img src={item.sprites.front_default} alt=''/>
                            </div>
                            <div className="poke-name"> { item.name } </div>
                        </div>
                    );
                })}

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