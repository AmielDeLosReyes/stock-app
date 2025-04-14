import React, { ChangeEvent, SyntheticEvent } from 'react';

interface Props {
    search: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSearch: (e: SyntheticEvent) => void;
  }
  

const Search: React.FC<Props> = ({ search, handleChange, handleSearch }) => {
    return (
    //   <div className="space-x-2 mb-4">
    //     <input
    //       type="text"
    //       value={search}
    //       onChange={handleChange}
    //       className="border border-gray-300 rounded px-2 py-1"
    //       placeholder="Search stock..."
    //     />
    //     <button
    //       onClick={handleSearch}
    //       className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
    //     >
    //       Search
    //     </button>
    //   </div>
    <>
        <form onSubmit={handleSearch}>
            <input value={search} onChange={handleChange} />
        </form>
    </>
    );
  };
export default Search;
