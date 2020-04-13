/* eslint-disable no-console */
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Search.css';
import TextInput from '../Common/TextInput';

const Search = () => {
  const [showSearchBox, toggleSearchBox] = useState(false);
  const onChangeHandler = (e) => {
    const { value } = e.target;
    if (e.key === 'Enter' && value !== '') {
      console.log('Start Search', value);
    }
    if (e.type === 'blur') {
      console.log('Value', e.target.value);
      if (value === '') toggleSearchBox(false);
    }
  };
  return (
    <div className="Search">
      <div className={`searchArea ${showSearchBox ? 'showSearch' : ''}`.trim()}>
        <TextInput
          placeholder="Search"
          type="search"
          onKeyPress={onChangeHandler}
          onBlur={onChangeHandler}
        />
      </div>
      <SearchIcon onClick={() => toggleSearchBox(!showSearchBox)} />
    </div>
  );
};

export default Search;
