import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';

interface Props {

}
const SearchPage = (props: Props) => {

    const [search, setSearch] = useState('');
    const [companies, setCompanies] = useState<CompanySearch[]>([]);
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log('[handleChange] User typed:', value);
        setSearch(value);
      };
      
      const handleSearch = async (e: SyntheticEvent) => {
        e.preventDefault(); // Prevent form submission
        console.log('[handleSearch] Starting search for:', search);
      
        try {
          setLoading(true);
          const result = await searchCompanies(search);
          console.log('[handleSearch] API result:', result);
    
          if(typeof result === "string") {
            setServerError(result);
          } else if (Array.isArray(result)) {
            setCompanies(result);
          }
        } catch (error) {
          console.error('[handleSearch] Search failed:', error);
        } finally {
          setLoading(false);
          console.log('[handleSearch] Done loading.');
        }
      };
    
      const onPortfolioCreate = (e: any) => {
        e.preventDefault();
        console.log(`Adding to portfolio!`);
        const exists = portfolioValues.find((value) => value === e.target[0].value)
        if(exists) {
          return;
        }
        const updatedPortfolio = [...portfolioValues, e.target[0].value];
        setPortfolioValues(updatedPortfolio);
      }
    
      const onDeleteStockFromPortfolio = (stock: string) => {
        console.log("Removing stock from portfolio:", stock);
        const updated = portfolioValues.filter((item) => item !== stock);
        setPortfolioValues(updated);
      };

    return (
        <div className="App p-4">
        {/* <Hero /> */}
        <Search search={search} handleChange={handleChange} handleSearch={handleSearch} />
        {serverError && <h1>{serverError}</h1>}

        <ListPortfolio 
            portfolioValues={portfolioValues} 
            onDeleteStockFromPortfolio={onDeleteStockFromPortfolio}
        />
        {loading ? (
            <p className="text-gray-600">Loading...</p>
        ) : (
            <CardList companies={companies} onPortfolioCreate={onPortfolioCreate}/>
        )}

        </div>
    )
}

export default SearchPage
