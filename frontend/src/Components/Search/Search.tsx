import React, { ChangeEvent, useState } from 'react';
import CardList from '../CardList/CardList';
import { searchCompanies } from '../../api';
import { CompanySearch } from '../../company';

const Search: React.FC = () => {
  const [search, setSearch] = useState('');
  const [companies, setCompanies] = useState<CompanySearch[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const result = await searchCompanies(search);
      setCompanies(result);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="space-x-2 mb-4">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          className="border border-gray-300 rounded px-2 py-1"
          placeholder="Search stock..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <CardList companies={companies} />
      )}
    </div>
  );
};

export default Search;
