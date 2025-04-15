import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
  portfolioValue: string;
  onDeleteStockFromPortfolio: (stock: string) => void;
}
const CardPortfolio = ({portfolioValue, onDeleteStockFromPortfolio}: Props) => {
  return (
    // <>
    //   <h4>{portfolioValue}</h4>
    //   <button onClick={() => onDeleteStockFromPortfolio(portfolioValue)}>x</button>
    // </>
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link to={`/company/${portfolioValue}`} className="pt-6 text-xl font-bold">{portfolioValue}</Link>
      <button onClick={() => onDeleteStockFromPortfolio(portfolioValue)} className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
    </div>
  )
}

export default CardPortfolio
