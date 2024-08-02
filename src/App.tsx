import './App.css';
import data from './data/stocks.json';
import StockList from './components/StockList';

function App() {
  return (
      <StockList stocks={data} />
  );
}

export default App;
