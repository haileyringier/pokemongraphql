import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri:  'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Router>
    <App client={client}/>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
