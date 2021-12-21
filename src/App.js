import "./App.css";
import Tooltip from "./Components/Tooltip";

function App() {
  return (
    <div className="App">
      <header>Front End Toolkit prototypes</header>
      <h1>Exemples :</h1>
      <section className="liste-exemples">
        <div className="hover-animation">
          this is a left test
          <Tooltip position="left" content="hello there" />
        </div>
        <div className="top-exemple hover-animation">
          this is a top test
          <Tooltip position="top" content="hello there" />
        </div>
        <div className="hover-animation">
          this is a bottom test
          <Tooltip position="bottom" content="hello there" />
        </div>
        <div className="hover-animation">
          this is a right test
          <Tooltip position="right" content="hello there" />
        </div>
      </section>
    </div>
  );
}

export default App;
