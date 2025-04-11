import React, { JSX } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company';

interface Props {
    companies: CompanySearch[];
  }
  
  const CardList: React.FC<Props> = ({ companies }) => {
    return (
      <div className="grid gap-4">
        {companies.map((company) => (
          <Card
            key={company.symbol}
            companyName={company.name}
            ticker={company.symbol}
            currency={company.currency}
            exchange={company.exchange}
          />
        ))}
      </div>
    );
  };

export default CardList
