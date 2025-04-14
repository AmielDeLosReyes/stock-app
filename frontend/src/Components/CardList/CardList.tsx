import React, { SyntheticEvent } from 'react';
import Card from '../Card/Card';
import { CompanySearch } from '../../company';

interface Props {
  companies: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

// CardList receives 'companies' with CompanySearch[] DTO for the response as a prop
const CardList: React.FC<Props> = ({ companies, onPortfolioCreate }) => {
  return (
    <div className="grid gap-4">
      {companies.length > 0 ? (
        companies.map((company) => (
          <Card
            key={company.symbol} // unique key
            companyName={company.name}
            ticker={company.symbol}
            currency={company.currency}
            exchange={company.exchange}
            onPortfolioCreate={onPortfolioCreate}
          />
        ))
      ) : (
        <h1>No results</h1>
      )}
    </div>
  );
};

export default CardList;
