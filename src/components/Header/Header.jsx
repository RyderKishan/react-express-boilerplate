import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ userDetails }) => {
  return (
    <div styleName="header">
      {userDetails.name}
    </div>
  );
};

Header.defaultProps = {
  userDetails: {
    name: '',
    email: '',
  }
};

Header.propTypes = {
  userDetails: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  })
};

export default Header;
