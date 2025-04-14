import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import { CompanySearch } from './company';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState('');
  const [companies, setCompanies] = useState<CompanySearch[]>([]);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

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

  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(`Adding to portfolio!`);
    console.log(e);
  }



  return (
    <div className="App p-4">
      <Search search={search} handleChange={handleChange} handleSearch={handleSearch} />
      {serverError && <h1>{serverError}</h1>}
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <CardList companies={companies} onPortfolioCreate={onPortfolioCreate}/>
      )}
    </div>
  );
}

export default App;
