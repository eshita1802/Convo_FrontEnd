import React, { useState } from 'react';
import './FilterDropdown.css';

const FilterDropdown = ({ columns }) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
    // You can handle the selected filter change here
  };

  return (
    <div className='filter-dropdown'>
      <label htmlFor="filter">Choose a filter:</label>
      <select id="filter" value={selectedFilter} onChange={handleChange}>
        <option value="">Select a filter</option>
        {columns.map((column, index) => (
          <option key={index} value={column}>
            {column}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
