import "./App.css";
import Tooltip2 from "./Components/Tooltip2";

function App() {
  return (
    <div className="App">
      <h1 className="main-title"> Tooltip Prototype</h1>

      <section className="on-hover">
        <Tooltip2 tooltipType="hover" position="left" content="Hello there">
          <div className="examples"> Left tip</div>
        </Tooltip2>
        <Tooltip2
          tooltipType="hover"
          position="top"
          content="Hello there, this is a longer text "
        >
          <div className="examples"> Top tip</div>
        </Tooltip2>
        <Tooltip2 tooltipType="hover" position="bottom" content="Hello there">
          <div className="examples"> Bottom tip</div>
        </Tooltip2>
        <Tooltip2 tooltipType="hover" position="right" content="heey there ! this is a longer sentence !">
          <div className="examples"> Right tip</div>
        </Tooltip2>
      </section>
      <section className="on-focus">
        <Tooltip2 tooltipType="focus" position="left" content="heey there !">
          <input placeholder="Left input"></input>
        </Tooltip2>
        <Tooltip2 tooltipType="focus" position="bottom" content="heey there">
          <input placeholder="Bottom input"></input>
        </Tooltip2>
        <Tooltip2
          tooltipType="focus"
          position="top"
          content="heey thereeeeeeeeeeeeeeeeeee"
        >
          <input placeholder="Top input"></input>
        </Tooltip2>
        <Tooltip2 tooltipType="focus" position="right" content="heey there">
          <input placeholder="Right input"></input>
        </Tooltip2>
      </section>
    </div>
  );
}

export default App;
