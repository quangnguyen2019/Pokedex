import React from 'react';
import { Container, Row } from 'reactstrap';

import './App.css';
import PokeListItem from './components/PokeList';

function App() {
  return (
    <div className="App">
      <h1 className="mt-4 mb-5"> Pokedex </h1>
      <PokeListItem />
    </div>
  );
}

export default App;
