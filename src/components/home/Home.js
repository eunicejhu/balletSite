import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.css';

import getTranslationsFromLocal from '../../utils/languages/getTranslationsFromLocal';
import S1Image from './S1Image';
import Stub from './Stub';
import S2UpcomingEvents from './S2UpcomingEvents';
import S3School from './S3School';
import S4Classes from './S4Classes';

const Home = (props) => {
  const { local, ...routeProps } = props;
  const { 
    HomeS1ImageTranslations, 
    S2UpcomingEventsTranslations,
    S3SchoolTranslations,
    S4ClassesTranslations,
    CommonTranslations,  
  } = getTranslationsFromLocal(local);

  const S1ImageProps = {
    className: styles.image,
    translations: HomeS1ImageTranslations,
  };

  const StubProps = {
    className: {
      stub: styles.stub,
      split: styles.split,
    },
    translations: S2UpcomingEventsTranslations,
  };

  const S2UpcomingEventsProps = {
    className: styles.upcomingEvents,
    translations: {...S2UpcomingEventsTranslations, ...CommonTranslations},
  };

  const S3SchoolProps = {
    className: styles.school,
    translations: {...S3SchoolTranslations, ...CommonTranslations},
  };

  const S4ClassesProps = {
    className: styles.classes,
    translations: {...S4ClassesTranslations, ...CommonTranslations},
  };

  return (
    <div className={styles.main}>
      <S1Image {...S1ImageProps} />
      <Stub {...StubProps} />
      <S2UpcomingEvents {...S2UpcomingEventsProps} />
      <S3School {...S3SchoolProps} />
      <S4Classes {...S4ClassesProps} />
    </div>
  );
};
  
Home.propTypes = {
  local: PropTypes.string.isRequired,
};

export default Home;
