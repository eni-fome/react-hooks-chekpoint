import React from 'react'

const Filter = ({ filterTitle, filterRate, handleFilterChange }) => {
  return (
    <div className="filter">
    <input
      type="text"
      placeholder="Filter by title"
      value={filterTitle}
      onChange={(e) => handleFilterChange('title', e.target.value)}
    />
    <input
      type="number"
      placeholder="Filter by rating"
      value={filterRate}
      onChange={(e) => handleFilterChange('rate', e.target.value)}
    />
  </div>
  )
}

export default Filter
