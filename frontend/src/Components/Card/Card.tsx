import React, { JSX, SyntheticEvent } from 'react';
import "./Card.css";
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router-dom';

interface CardProps {
  companyName: string;
  ticker: string;
  currency: string;
  exchange: string;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<CardProps> = ({
  companyName,
  ticker,
  currency,
  exchange,
  onPortfolioCreate,
}: CardProps): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      id={ticker}
    >
      <div className="flex flex-col items-center md:items-start">
        <Link to={`/company/${ticker}`} className="font-bold text-center text-veryDarkViolet md:text-left">
          {companyName} ({ticker})
        </Link>
        <p className="text-black">Currency: {currency}</p>
        <p className="font-bold text-black">Exchange: {exchange}</p>
      </div>
      <div className="mt-4 md:mt-0">
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={ticker} />
      </div>
    </div>
  );
};

export default Card;
