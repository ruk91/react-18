import React from 'react';
import './App.css';
import pokemonData from './pokemon.json'
import { pokemon } from './interfaces/pokemon.interface';

const PokemonRow = ({ pokemon }: any) => {
  return (
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
    </tr>
  )
}

function App() {
  console.log(pokemonData.length
    );
  
  return (
    <div style={{
      margin: 'auto',
      width: 800,
      paddingTop: '1rem'
    }}>
      <h1 className='title'>Pockemon Search</h1>
      <table width='100%'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {
            pokemonData.slice(0, 10).map((pokemon: pokemon | any ) => 
              <PokemonRow pokemon={pokemon} key={pokemon.id} />
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
