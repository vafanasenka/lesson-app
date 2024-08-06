import "./App.css";
import data from "./data/stocks.json";
import StockList from "./features/StockList/StockList";
import MousePosition from "./features/MousePosition/MousePosition";
import WeatherWidget from "./features/WeatherWidget/WeatherWidget";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <StockList stocks={data} />
        </div>
        <div id="grid-container" className="col-md-8 h-100 p-3 grid-container">
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
          <WeatherWidget
            location="New York"
            temperature={25}
            isDaytime={true}
            bounds="#grid-container"
          />
          <MousePosition />
        </div>
      </div>
    </div>
  );
}

export default App;
