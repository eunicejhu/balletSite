import React from 'react';
import PropTypes from 'prop-types';

import image1 from '../../../static/images/14.jpg';
import image2 from '../../../static/images/11.jpg';
import image3 from '../../../static/images/15.jpg';
import image4 from '../../../static/images/16.jpg';

const S4Classes = ({ className, translations }) => {
  return (
     <section className={className}>
        <h1>{translations.classes}</h1>
        <div>
          <figure>
            <img src={image1} alt={translations.class1} />
            <figcaption>{translations.class1}
              <p>
                {translations.shortDescription}
              </p>
            </figcaption>
          </figure>
          <figure>
            <img src={image2} alt={translations.class2} />
            <figcaption>
              {translations.class2}
              <p>
                {translations.shortDescription}
              </p>
            </figcaption>
          </figure>
          <figure>
            <img src={image3} alt={translations.class3} />
            <figcaption>
              {translations.class3}
              <p>
                {translations.shortDescription}
              </p>
            </figcaption>
          </figure>
          <figure>
            <img src={image4} alt={translations.class4} />
            <figcaption>
              {translations.class4}
              <p>
                {translations.shortDescription}
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
  );
};

S4Classes.propTypes = {
  className: PropTypes.string.isRequired,
  translations: PropTypes.object.isRequired,
};

export default S4Classes;