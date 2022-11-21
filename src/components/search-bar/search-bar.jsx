import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import './search-bar.scss';

const SearchBar = ({ elem, setSearchResults, type }) => {
  const [search, setSearch] = useState('');

  const condition = (elem, e) => {
    switch (type) {
    case 'name':
      const query = e.target.value.toLowerCase();
      if (query === '') return true;
      return (
        elem.name.toLowerCase().includes(query) ||
        elem.description.toLowerCase().includes(query) ||
        elem.startDate.toLowerCase().includes(query)
      );
    default:
      return false;
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    const resultsArray = elem.filter((elem) => condition(elem, e));
    setSearchResults(resultsArray);
  };

  // setSearchResults(elem);

  return (
    <div className='input-group mb-3' style={{ display: 'contents' }}>
      <input
        type='text'
        placeholder=''
        className='form-control'
        value={search}
        onChange={handleSearchChange}
        defaultValue=''
      />
      <div className='input-group-prepend'>
        <span
          className='input-group-text'
          id='basic-addon1'
          style={{ height: '100%' }}
        >
          <FontAwesomeIcon icon='fa-solid fa-magnifying-glass' />
        </span>
      </div>
    </div>
  );
};
export default SearchBar;
