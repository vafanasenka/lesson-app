import React from 'react';
import Book from '../models/book';
import StockItem from './StockItem';

interface StockListProps {
    stocks: Book[];
}

const StockList: React.FC<StockListProps> = ({ stocks }) => {
    return (
        <>
            <h3>Stock</h3>
            <div>
                {stocks.map(stock => (
                    <StockItem key={stock.id} stock={stock} />
                ))}
            </div>
        </>
    );
};

export default StockList;