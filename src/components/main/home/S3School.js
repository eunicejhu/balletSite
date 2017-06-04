import React from 'react';
import PropTypes from 'prop-types';

const S3School = ({ className, translations }) => {
  return (
    <section className={className}>
      <h1>{translations.school}</h1>
      <p>{translations.description}</p>
    </section>
  );
};

S3School.propTypes = {
  className: PropTypes.string.isRequired,
  translations: PropTypes.object.isRequired,
};

export default S3School;