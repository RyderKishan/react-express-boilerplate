import React from 'react';
import PropTypes from 'prop-types';
import * as qs from 'qs';
import './FallBack.css';

const failureMessages = {
  NOT_FOUND: 'Particular content is not found',
  LOGGED_OUT: 'You have been logged out successfully',
  SESSION_EXPIRED: 'Your session is expired! Please reload',
};

const getErrorMessage = (location) => {
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  if (params.error) {
    const failureMessage = failureMessages[params.error];
    if (failureMessage) {
      return {
        text: failureMessage,
        code: `ERRCODE: ${params.error}`,
      };
    }
  }
  return {
    text: failureMessages.NOT_FOUND,
    code: 'ERRCODE: 404',
  };
};

const FallBack = ({ location }) => {
  const message = getErrorMessage(location);
  return (
    <div className="unauthpage">
      <div className="authHeader">{message.code}</div>
      <div>{message.text}</div>
    </div>
  );
};

FallBack.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default FallBack;
