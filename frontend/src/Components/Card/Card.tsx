import React, { JSX } from 'react'
import "./Card.css";

interface CardProps {
    companyName: string;
    ticker: string;
    currency: string;
    exchange: string;
};

const Card: React.FC<CardProps> = ({ companyName, ticker, currency, exchange }) => {
    return (
      <div className="border p-4 m-2 rounded shadow w-full max-w-md">
        <h2 className="text-lg font-bold">{companyName}</h2>
        <p className="text-gray-700">Ticker: {ticker}</p>
        <p className="text-gray-600">Currency: {currency}</p>
        <p className="text-gray-500">Exchange: {exchange}</p>
      </div>
    );
  };

export default Card
