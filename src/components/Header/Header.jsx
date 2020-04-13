import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';
import './Header.css';
import Search from '../Search/Search';

const Header = ({ userDetails }) => {
  const history = useHistory();
  const logoText = userDetails && userDetails.name && userDetails.name.slice(0, 1);
  return (
    <div className="Header">
      <div className="image-container">
        <img
          alt="logo"
          role="none"
          onClick={() => history.push('/')}
          src="/public/images/gk_tag.png"
        />
      </div>
      <div className="loginUser">
        <div className="routing">
          <span onClick={() => history.push('/about')} role="none">
            About
          </span>
          <span onClick={() => history.push('/contact')} role="none">
            Contact Us
          </span>
        </div>
        <div className="search">
          <Search />
        </div>
        <span>
          {userDetails.name}
        </span>
        <Avatar>{logoText}</Avatar>
      </div>
    </div>
  );
};

Header.defaultProps = {
  userDetails: {
    name: '',
    email: '',
  },
};

Header.propTypes = {
  userDetails: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default Header;
