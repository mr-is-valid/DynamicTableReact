import React from 'react';
import Grid from './Grid';
import movies from './data_a';
import pokemon from './data_b';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Trailer = ( data ) => (
  <a href={data.url}
     target="_blank"
     rel="noopener noreferrer">
    trailer...
  </a>
);

const PokemonName = (data) => <span style={{ textTransform: 'capitalize' }}>{data}</span>;

const moviesConfig = {
  'tableTitle': 'Movies', 
  'config':[
  {
    title: 'Title',
    field: 'Title'
  },
  {
    title: 'Year',
    field: 'Year'
  },
  {
    title: 'Rated',
    field: 'Rated',
  },
  {
    title: 'Released',
    field: 'Released'
  },
  {
    title: 'Runtime',
    field: 'Runtime'
  },
  {
    title: 'Genre',
    field: 'Genre',
  },
  {
    title: 'Director',
    field: 'Director'
  },
  {
    title: 'Writer',
    field: 'Writer'
  },
  {
    title: 'Actors',
    field: 'Actors',
  },
  {
    title: 'Plot',
    field: 'Plot'
  },
  {
    title: 'Poster',
    field: 'Poster'
  },
  {
    title: 'imdbRating',
    field: 'imdbRating',
  },
  {
    title: 'Poster',
    field: 'Poster'
  },
  {
    title: 'imdbVotes',
    field: 'imdbVotes',
  },
  {
    title: 'imdbID',
    field: 'imdbID'
  },
  {
    title: 'Type',
    field: 'Type',
  },
  {
    title: 'Response',
    field: 'Response'
  },
  {
    title: 'Trailer',
    field: 'Trailer',
    component: Trailer
  }
]};

const pokemonConfig = {'tableTitle':'Pokemon', 'config':[
  {
    title: 'pokedex #',
    field: 'number'
  },
  {
    title: 'name',
    field: 'name',
    component: PokemonName
  },
  {
    title: 'url',
    field: 'url'
  },
]};

const App = () => (
  <>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Dynamic Table
        </Typography>
      </Toolbar>
    </AppBar>
    
    <Grid title={moviesConfig['tableTitle']} config={moviesConfig['config']} data={movies} />
    <Grid title={pokemonConfig['tableTitle']} config={pokemonConfig['config']} data={pokemon} />
  </>
);

export default App;
