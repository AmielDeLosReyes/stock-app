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
      <div className="card">
        <div className="details"> 
            <img src="https://media.istockphoto.com/id/138279113/photo/colored-ticker-board-on-black.jpg?s=612x612&w=0&k=20&c=cP3DhuSfAn4tR66ewnvl5WT4rQ5fBcyJDgJ3zMw7Mlo=" alt="stock" />
            <h2>{companyName}</h2>
            <p >Ticker: {ticker}</p>
            <p >Currency: {currency}</p>
            <p >Exchange: {exchange}</p>
        </div>
      </div>
    );
  };

export default Card
