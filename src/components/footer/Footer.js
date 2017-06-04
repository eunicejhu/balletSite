import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';

import getTranslationsFromLocal from '../../utils/languages/getTranslationsFromLocal';

import Address from './Address';
import Share from './Share';

const Footer = ({ local }) => {
  const { FooterTranslations } = getTranslationsFromLocal(local);
  return (
    <section className={styles.footer}>
      <div>
        <Address 
          className={styles.address} 
          translations={FooterTranslations}
        />
        <Share className={styles.share} />
      </div>
      
      <p>©Copyright 2017 Ballet School /  Terms of Use / Privacy</p>
    </section>
  );
};

Footer.propTypes = {
  local: PropTypes.string.isRequired,
};

export default Footer;