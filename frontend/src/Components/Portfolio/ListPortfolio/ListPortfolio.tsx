import React from 'react';
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  portfolioValues: string[];
}

const ListPortfolio: React.FC<Props> = ({ portfolioValues }) => {
  return (
    <>
      <h3>My Portfolio</h3>
      <ul>
        {portfolioValues &&
          portfolioValues.map((portfolioValue) => (
            <CardPortfolio key={uuidv4()} portfolioValue={portfolioValue} />
          ))}
      </ul>
    </>
  );
};

export default ListPortfolio;
