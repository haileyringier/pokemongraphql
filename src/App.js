import './App.css';
import Home from './Components/Home';
import { Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import PokemonDetails from './Components/PokemonDetails';


export default function App(props) {
  return (
    <ApolloProvider client={props.client}>
      <div className="App">
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"></img>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:name" component={PokemonDetails} />
      </Switch>
    </div>
    </ApolloProvider>
  );
}

