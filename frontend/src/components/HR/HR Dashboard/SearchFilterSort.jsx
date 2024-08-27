import React, { useState } from 'react';

const SearchFilterSort = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('recent');
  const [filterOption, setFilterOption] = useState('all');

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSortChange = (e) => setSortOption(e.target.value);
  const handleFilterChange = (e) => setFilterOption(e.target.value);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by candidate name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full md:w-1/3 px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />

        {/* Filter Options */}
        <select
          value={filterOption}
          onChange={handleFilterChange}
          className="w-full md:w-1/3 px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="all">All Candidates</option>
          <option value="reviewed">Reviewed</option>
          <option value="pending">Pending</option>
        </select>

        {/* Sort Options */}
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="w-full md:w-1/3 px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="recent">Sort by Recent</option>
          <option value="name">Sort by Name</option>
          <option value="experience">Sort by Experience</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilterSort;
