import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.css';

import getTranslationsFromLocal from '../../utils/languages/getTranslationsFromLocal';
import S1Image from './S1Image';
import S2UpcomingEvents from './S2UpcomingEvents';
import S3School from './S3School';
import S4Classes from './S4Classes';


const Home = ({ local }) => {
  const translations = getTranslationsFromLocal(local);

  return (
    <div className={styles.main}>
      <S1Image 
        className={styles.image} 
        translations={translations.HomeS1ImageTranslations} />
      <div className={styles.gut}>
        <div>
          <span className={styles.split}></span>
        </div>
        <h1>Upcoming Events</h1>
      </div>
      <S2UpcomingEvents 
        className={styles.upcomingEvents} 
        translations={translations} />
      <S3School 
        className={styles.school} 
        translations={translations}
      />
      <S4Classes 
        className={styles.classes} 
        translations={translations}
      />
    </div>
  );
};
  
Home.propTypes = {
  local: PropTypes.string.isRequired,
};

export default Home;
