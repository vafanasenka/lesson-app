import React from 'react';
import Book from '../models/book';

interface StockItemProps {
    stock: Book;
}

const StockItem: React.FC<StockItemProps> = ({ stock }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">
                    <span className='font-weight-bold'>#id</span> {stock.id} ({stock.ticker}) {stock.name}
                </h5>
                <p className="card-text">
                    Price: ${stock.price.toFixed(2)}
                </p>
                <p className="card-text">
                    Quantity: {stock.quantity}
                </p>
            </div>
        </div>
    );
};

export default StockItem;