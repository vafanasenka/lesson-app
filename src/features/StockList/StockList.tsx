import React, { useEffect, useState } from 'react';
import Book from '../../shared/types/book';
import StockItem from '../components/StockItem';

interface StockListProps {
    stocks: Book[];
}

const StockList: React.FC<StockListProps> = ({ stocks }) => {
    const [currentStocks, setStocks] = useState<Book[]>(stocks);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const updatedStocks = currentStocks.map(stock => {
          const random = Math.random();
  
          const diffPrice = random * 10 - 5;
          const newPrice = Math.abs(stock.price + diffPrice);
  
          const diffQuantity = Math.floor(random * 10) - 5;
          const newQuantity = Math.abs(stock.quantity + diffQuantity);
          return { ...stock, price: newPrice, quantity: newQuantity };
        });
  
        setStocks(updatedStocks);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [currentStocks]);
  

    return (
        <>
            <div className="w-100 p-3">
                <h3>Stock updated every 1 sec</h3>

                {currentStocks.map(stock => (
                    <StockItem key={stock.id} stock={stock} />
                ))}
            </div>
        </>
    );
};

export default StockList;