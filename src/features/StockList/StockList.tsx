import React from 'react';
import Book from '../../shared/types/book';
import StockItem from '../components/StockItem';

interface StockListProps {
    stocks: Book[];
}

const StockList: React.FC<StockListProps> = ({ stocks }) => {
    return (
        <>
            <div className="w-100 p-3">
                <h3>Stock</h3>
            </div>
            <div className="w-100 p-3">
                {stocks.map(stock => (
                    <StockItem key={stock.id} stock={stock} />
                ))}
            </div>
        </>
    );
};

export default StockList;