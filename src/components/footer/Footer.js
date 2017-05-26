import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';

const Footer = ({ local }) => (
  <div>This is Footer</div>
);

Footer.propTypes = {
  local: PropTypes.string.isRequired,
};

export default Footer;