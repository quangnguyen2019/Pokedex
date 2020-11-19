import React from 'react';

import './App.css';
import PokeList from './components/PokeList';

function App() {
  return (
    <div className="App">
      <h1 className="mt-4 mb-5"> Pokedex </h1>
      <PokeList />
    </div>
  );
}

export default App;
