import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './search-bar.scss';

const SearchBar = ({ elem, setSearchResults, type }) => {
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(elem);
    const condition = (elem) => {
      switch (type) {
      case 'name':
        const query = e.target.value.toLowerCase();
        return (
          elem.name.toLowerCase().includes(query) ||
          elem.description.toLowerCase().includes(query) ||
          elem.startDate.toLowerCase().includes(query)
        );
      default:
        return false;
      }
    };

    const resultsArray = elem.filter((elem) => condition(elem));

    setSearchResults(resultsArray);
  };

  return (
    <div className='input-group mb-3' style={{ display: 'contents' }}>
      <input
        type='text'
        placeholder=''
        className='form-control'
        onChange={handleSearchChange}
        onBlur={(e) => {
          e.target.value = '';
          return setSearchResults(elem);
        }}
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
