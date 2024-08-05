import './App.css';
import data from './data/stocks.json';
import StockList from './components/StockList';
import { useEffect, useState } from 'react';
import Book from './models/book';

function App() {
  const [stocks, setStocks] = useState<Book[]>(data);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedStocks = stocks.map(stock => {
        const random = Math.random();
        const diff = random * 10 - 5;
        const newPrice = stock.price + diff;
        return { ...stock, price: newPrice };
      });

      setStocks(updatedStocks);
    }, 1000);

    return () => clearInterval(interval);
  }, [stocks]);

  return (
      <StockList stocks={stocks} />
  );
}

export default App;
