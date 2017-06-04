import React from 'react';
import PropTypes from 'prop-types';

import galaImage from '../../../static/images/10.jpg';
import stageImage from '../../../static/images/4.jpg';

const S2UpcomingEvents = ({ className, translations }) => {
  const { S2UpcomingEventsTranslations, CommonTranslations } = translations;
  return (
    <section className={className}>
      <article>
        <figure>
          <img src={galaImage} alt=""/>
          <figcaption>
            <h2>{S2UpcomingEventsTranslations.gala}</h2>
            <time dateTime="2017-06-18">{S2UpcomingEventsTranslations.galaTime}</time>
            <p>{CommonTranslations.shortDescription}</p>
            <button>{S2UpcomingEventsTranslations.buyTheTicket}</button>
          </figcaption>
        </figure>
      </article>
      <article>
        <figure>
          <img src={stageImage} alt=""/>
          <figcaption>
            <h2>{S2UpcomingEventsTranslations.stage}</h2>
            <time dateTime="2017-07-3">{S2UpcomingEventsTranslations.stageTime}</time>
            <p>{CommonTranslations.shortDescription}</p>
            <button>{S2UpcomingEventsTranslations.inscription}</button>
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