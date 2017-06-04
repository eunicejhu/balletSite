import React from 'react';
import PropTypes from 'prop-types';

import image1 from '../../../static/images/14.jpg';
import image2 from '../../../static/images/11.jpg';
import image3 from '../../../static/images/15.jpg';
import image4 from '../../../static/images/16.jpg';

const S4Classes = ({ className, translations }) => {
  const { S4ClassesTranslations, CommonTranslations } = translations;
  return (
     <section className={className}>
        <h1>{S4ClassesTranslations.classes}</h1>
        <div>
          <figure>
            <img src={image1} alt={S4ClassesTranslations.class1} />
            <figcaption>{S4ClassesTranslations.class1}
              <p>
                {CommonTranslations.shortDescription}
              </p>
            </figcaption>
          </figure>
          <figure>
            <img src={image2} alt={S4ClassesTranslations.class2} />
            <figcaption>
              {S4ClassesTranslations.class2}
              <p>
                {CommonTranslations.shortDescription}
              </p>
            </figcaption>
          </figure>
          <figure>
            <img src={image3} alt={S4ClassesTranslations.class3} />
            <figcaption>
              {S4ClassesTranslations.class3}
              <p>
                {CommonTranslations.shortDescription}
              </p>
            </figcaption>
          </figure>
          <figure>
            <img src={image4} alt={S4ClassesTranslations.class4} />
            <figcaption>
              {S4ClassesTranslations.class4}
              <p>
                {CommonTranslations.shortDescription}
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