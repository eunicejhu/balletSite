import React from 'react';
import PropTypes from 'prop-types';
import image from '../../../static/images/1.jpg';

const S5Professors = ({ className, translations }) => (
  <section className={className}>
    <h1>{translations.professors}</h1>
    <div>
      <figure>
        <img src={image} alt={translations.pro1}/>
        <figcaption>{translations.pro1}</figcaption>
      </figure>
      <figure>
        <img src={image} alt={translations.pro2}/>
        <figcaption>{translations.pro2}</figcaption>
      </figure>
    </div>
  </section>
);

S5Professors.propTypes = {
  className: PropTypes.string.isRequired,
  translations: PropTypes.object.isRequired,
};

export default S5Professors;