import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.css';

import getTranslationsFromLocal from '../../utils/languages/getTranslationsFromLocal';

const Home = ({ local }) => {
  const translations = getTranslationsFromLocal(local);
  return (
    <div className={styles.root}>
      <span>{translations.welcomeHome}</span>
      <div className={styles.bold}>Are you serious?</div>
    </div>
  );
};
  
Home.propTypes = {
  local: PropTypes.string.isRequired,
};

export default Home;
