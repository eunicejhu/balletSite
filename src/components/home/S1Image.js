import React from 'react';
import PropTypes from 'prop-types';

import welcomeImage from '../../../static/images/1.jpeg';
import welcomeVideo from '../../../static/images/welcome_2.mp4';

const S1Image = ({ className, translations }) => (
  <section className={className}>
    <video 
       playsInline autoPlay muted loop >
      <source src={welcomeVideo} type="video/mp4" />
    </video>
    <h1>
      {translations.title} 
    </h1>
    <figure>
      <img 
        src={welcomeImage}
        alt="DEMO SITE"
      />
      <figcaption>{translations.title}</figcaption>
    </figure>
  </section>
);

S1Image.propTypes = {
  className: PropTypes.string.isRequired,
  translations: PropTypes.object.isRequired,
};

export default S1Image;