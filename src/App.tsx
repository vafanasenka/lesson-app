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
        <div className="col-md-4">
          <MousePosition />
        </div>
        <div
          id="weather-widget-container"
          className="col-md-4"
          style={{
            position: "relative",
            height: "600px",
            border: "1px solid #ccc",
          }}
        >
          <WeatherWidget
            location="New York"
            temperature={25}
            isDaytime={true}
            bounds="#weather-widget-container"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
