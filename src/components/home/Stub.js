import React from 'react';
import PropTypes from 'prop-types';

const Stub = ({ className, translations }) => (
  <div className={className.stub}>
    <div>
      <span className={className.split}></span>
    </div>
    <h1>{translations.upcomingEvents}</h1>
  </div>
);

Stub.propTypes = {
  className: PropTypes.shape({
    stub: PropTypes.string.isRequired,
    split: PropTypes.string.isRequired,
  }),
  translations: PropTypes.object.isRequired,
};

export default Stub;