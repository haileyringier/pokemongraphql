import './App.css';
import Home from './Components/Home';
import { Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';


export default function App(props) {
  return (
    <ApolloProvider client={props.client}>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />

      </Switch>
    </div>
    </ApolloProvider>
  );
}

