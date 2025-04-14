import React from 'react'

interface Props {
  portfolioValue: string;
  onDeleteStockFromPortfolio: (stock: string) => void;
}
const CardPortfolio = ({portfolioValue, onDeleteStockFromPortfolio}: Props) => {
  return (
    <>
      <h4>{portfolioValue}</h4>
      <button onClick={() => onDeleteStockFromPortfolio(portfolioValue)}>x</button>
    </>
  )
}

export default CardPortfolio
