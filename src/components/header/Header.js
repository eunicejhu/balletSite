import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

const Header = ({ local }) => (
  <div>This is Header</div>
);

Header.propTypes = {
  local: PropTypes.string.isRequired,
};

export default Header;