import React, { SyntheticEvent } from 'react'
import "./Card.css";
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface CardProps {
    companyName: string;
    ticker: string;
    currency: string;
    exchange: string;
    onPortfolioCreate: (e: SyntheticEvent) => void;
};

const Card: React.FC<CardProps> = ({ companyName, ticker, currency, exchange, onPortfolioCreate }) => {
    return (
      <div className="card">
        <div className="details"> 
            <img src="https://media.istockphoto.com/id/138279113/photo/colored-ticker-board-on-black.jpg?s=612x612&w=0&k=20&c=cP3DhuSfAn4tR66ewnvl5WT4rQ5fBcyJDgJ3zMw7Mlo=" alt="stock" />
            <h2>{companyName}</h2>
            <p >Ticker: {ticker}</p>
            <p >Currency: {currency}</p>
            <p >Exchange: {exchange}</p>
            <AddPortfolio 
            onPortfolioCreate={onPortfolioCreate} 
            symbol={ticker}/>
        </div>
      </div>
    );
  };

export default Card
