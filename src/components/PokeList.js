import { Component } from 'react';
import axios from 'axios';

import './PokeList.css';

export default class PokeList extends Component {
    constructor() {
        super();
        this.state = { pokeArr: [] }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        for (let i = 1; i <= 20; i++) {
            let url = `https://pokeapi.co/api/v2/pokemon-form/${i}`;

            axios
                .get(url)
                .then((res) => {
                    this.setState(state => {
                        return {
                            pokeArr: [ ...state.pokeArr, res.data]
                        }
                    });
                });
        }
    }
    
    render() {
        const { pokeArr } = this.state;

        console.log(this.state.pokeArr);

        return(
            <div className="poke-list">
                { pokeArr.map((item) => {
                    return(
                        <div className="poke-list-item">
                            <div className='poke-img'>
                                <img src={item.sprites.front_default} alt=''/>
                            </div>
                            <div className="poke-name"> { item.name } </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}