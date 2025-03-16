import './App.css'
import MovieCard from './components/MovieCard';

function App() {
  return (
    <>
      <MovieCard movie={{title: "New Film", release_date: "2025"}}/>
      <MovieCard movie={{title: "New Film 2", release_date: "2025"}}/>
      <MovieCard movie={{title: "New Film 3", release_date: "2025"}}/>
      <MovieCard movie={{title: "New Film 4", release_date: "2025"}}/>
    </>
  );
}

function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App
