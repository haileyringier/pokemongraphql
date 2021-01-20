import './App.css';
import Home from './Components/Home';
import PokemonCard from './Components/PokemonCard';
import PokemonSection from './Components/PokemonSection';

export default function App() {
  return (
    <div className="App">
      <Home />
      <PokemonSection />
      <PokemonCard />
    </div>
  );
}

