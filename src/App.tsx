import "./App.css";
import data from "./data/stocks.json";
import StockList from "./features/StockList/StockList";
import MousePosition from "./features/MousePosition/MousePosition";
import GridList from "./features/WeatherWidget/GridList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <MousePosition />
          <StockList stocks={data} />
        </div>
        <div className="col-md-8">
          <GridList />
        </div>
      </div>
    </div>
  );
}

export default App;
