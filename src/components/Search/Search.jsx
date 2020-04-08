/* eslint-disable no-console */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
// import useStyles from './styles';
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
  // const classes = useStyles();
  return (
    <div className="root">
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

// Search.defaultProps = {
//   userDetails: {
//     name: '',
//     email: '',
//   },
// };

// Search.propTypes = {
//   userDetails: PropTypes.shape({
//     name: PropTypes.string,
//     email: PropTypes.string,
//   }),
// };

export default Search;
