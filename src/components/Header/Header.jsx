import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';
import './Header.css';

const Header = ({ userDetails, appName }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        {appName}
      </div>
      <div>
        {userDetails.name}
      </div>
    </div>
  );
};

Header.defaultProps = {
  appName: '',
  userDetails: {
    name: '',
    email: '',
  },
};

Header.propTypes = {
  appName: PropTypes.string,
  userDetails: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default Header;
