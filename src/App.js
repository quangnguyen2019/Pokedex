import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import axios from 'axios';

import './App.css';
import PokeList from './components/PokeList';
import PokemonDetails from './pages/PokemonDetails';

class App extends Component {
  constructor() {
      super();
      this.state = {
        pokemons: [],
        loading: true
      };
      this.startPosition = 0;
  }

  componentDidMount() {
      this.getData(20);
  }

  getData(limit) {
      this.setState({ loading: true });

      // Get data each pokemon
      let endPosition = this.startPosition + limit;
      const pokePromises = [];  //  array contains promises

      for (let i = this.startPosition + 1; i <= endPosition; i++) {
          let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${i}`;
          pokePromises.push(axios.get(urlPokemon))
      }

      // Once all promises done => do something...
      Promise.all(pokePromises).then((res) => {
          this.setState({
              pokemons: [ 
                ...this.state.pokemons, 
                ...res.map((item) => item.data)
              ],
              loading: false
            });
      })

      this.startPosition = endPosition;
  }

  render() {
    const { pokemons, loading } = this.state;
    return (
      <div className="App">
        {
          loading ? 
          <div className="spinner">
            <Spinner color="dark" /> 
          </div> :
          <Router>
            <Switch>
    
              <Route 
                  exact
                  path="/pokemon/:id" 
                  children={<PokemonDetails pokemons={pokemons} />}
              />
              <Route path="/" exact>
                <h1 className="mt-4 mb-5"> Pokedex </h1>

                <PokeList pokemons={pokemons} />
                <Button 
                    color="primary" outline 
                    className="mt-3 mb-5 btn-load-more"
                    onClick={() => this.getData(20)}
                > 
                    Load More 
                </Button>
              </Route>
    
            </Switch>
          </Router>
        }
      </div>
    );
  }
}

export default App;
