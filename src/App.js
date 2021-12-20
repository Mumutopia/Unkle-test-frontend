import "./App.css";
import Tooltip from "./Components/Tooltip";

function App() {
  return (
    <div className="App">
      <header>Front End Toolkit prototypes</header>
      <h1>Exemples :</h1>
      <section className="liste-exemples">
      <div className="top-exemple">
          this is a left test
          <Tooltip position="left-tooltip" content="hello there" />
        </div>
        <div className="top-exemple">
          this is a top test
          <Tooltip position="top-tooltip" content="hello there" />
        </div>
        <div className="top-exemple">
          this is a bottom test
          <Tooltip position="bottom-tooltip" content="hello there" />
        </div>
       
        <div className="top-exemple">
          this is a right test
          <Tooltip position="right-tooltip" content="hello there" />
        </div>
      </section>
    </div>
  );
}

export default App;
