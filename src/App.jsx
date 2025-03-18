import "./App.css";
import Home from "./pages/Home";

function App() {
  const movieNumber = 2
  ;

  return (
    <>
      <Home />
    </>
  );
}

function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
