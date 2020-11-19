import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import PokeList from './components/PokeList';
import PokemonDetails from './pages/PokemonDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/pokemon/:id" children={<PokemonDetails />} />
          <Route path="/">
            <h1 className="mt-4 mb-5"> Pokedex </h1>
            <PokeList />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
