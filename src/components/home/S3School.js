import React from 'react';
import PropTypes from 'prop-types';

import image from '../../../static/images/3.jpeg';

const S3School = ({ className, translations }) => {
  const { S3SchoolTranslations, CommonTranslations } = translations;
  return (
    <section className={className}>
      <h1>{S3SchoolTranslations.school}</h1>
      <p>{CommonTranslations.description}</p>
    </section>
  );
};

S3School.propTypes = {
  className: PropTypes.string.isRequired,
  translations: PropTypes.object.isRequired,
};

export default S3School;