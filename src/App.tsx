import "./App.css";
import data from "./data/stocks.json";
import StockList from "./features/StockList/StockList";
import MousePosition from "./features/MousePosition/MousePosition";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <StockList stocks={data} />
        </div>
        <div className="col-md-6">
          <MousePosition />
        </div>
      </div>
    </div>
  );
}

export default App;
