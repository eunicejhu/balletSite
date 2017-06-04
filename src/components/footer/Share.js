import React from 'react';
import PropTypes from 'prop-types';
import { ShareButtons, generateShareIcon } from 'react-share';

const Share = ({ className }) => {
  const { FacebookShareButton, GooglePlusShareButton } = ShareButtons;
  const FacebookIcon = generateShareIcon('facebook');
  const GooglePlusIcon = generateShareIcon('google');

  return (
    <div className={className}>
      <FacebookShareButton
        url="https://www.facebook.com/AcademieDanse17/"
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <GooglePlusShareButton
        url="https://plus.google.com/106568376134028562156"
      >
        <GooglePlusIcon size={32} round={true} />
      </GooglePlusShareButton>
    </div>
  );
};

Share.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Share;