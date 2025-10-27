import React from 'react';
import PropTypes from 'prop-types';

const ThemeToggle = ({ dark, onToggle }) => (
  <button
    className='absolute top-4 right-4 bg-gray-200 dark:bg-gray-800 rounded px-3 py-1 text-sm'
    onClick={onToggle}
    aria-label='Basculer le thème clair/sombre'
  >
    {dark ? 'Mode clair' : 'Mode sombre'}
  </button>
);


ThemeToggle.propTypes = {
  dark: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};
