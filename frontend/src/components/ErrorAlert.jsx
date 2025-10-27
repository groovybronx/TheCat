import React from 'react';
import PropTypes from 'prop-types';

const ErrorAlert = ({ message }) => (
  message ? (
    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4' role='alert'>
      {message}
    </div>
  ) : null
);


ErrorAlert.propTypes = {
  message: PropTypes.string
};
