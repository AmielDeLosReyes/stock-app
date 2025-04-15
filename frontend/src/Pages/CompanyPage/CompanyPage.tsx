import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';

interface Props {

}

const CompanyPage = (props: Props ) => {

    const { ticker } = useParams();
    const [company, setCompany] = useState<CompanyProfile>();

    useEffect(() => {
        const getProfileInit = async () => {
            if (!ticker) return;
            const result = await getCompanyProfile(ticker);
            setCompany(result[0]);
        };

        getProfileInit();
    }, [ticker]);
    
  return (
    <>
        {company ? (
            <div>{company.companyName}</div>
        ) : (
            <div>Company not found!</div>
        )}
    </>
  );
};

export default CompanyPage
