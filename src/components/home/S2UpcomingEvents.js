import React from 'react';
import PropTypes from 'prop-types';

import galaImage from '../../../static/images/10.jpg';
import stageImage from '../../../static/images/4.jpg';

const S2UpcomingEvents = ({ className, translations }) => {
  return (
    <section className={className}>
      <article>
        <figure>
          <img src={galaImage} alt=""/>
          <figcaption>
            <h2>{translations.gala}</h2>
            <time dateTime="2017-06-18">{translations.galaTime}</time>
            <p>{translations.shortDescription}</p>
            <button>{translations.buyTheTicket}</button>
          </figcaption>
        </figure>
      </article>
      <article>
        <figure>
          <img src={stageImage} alt=""/>
          <figcaption>
            <h2>{translations.stage}</h2>
            <time dateTime="2017-07-3">{translations.stageTime}</time>
            <p>{translations.shortDescription}</p>
            <button>{translations.inscription}</button>
          </figcaption>
        </figure>
      </article>
    </section>
  );
};

S2UpcomingEvents.propTypes = {
  className: PropTypes.string.isRequired,
  translations: PropTypes.object.isRequired,
};

export default S2UpcomingEvents;