import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactBox.css';

const ContactBox = (props) => (<section className={styles.wrapper}>
  <div
   className={styles.button}
   content={props.content}
   onClick={props.onHandleClick}
   />
  <div className={styles.cover}>
    <div title={props.coverTitle} className={styles.inner} />
    <div title={props.coverTitle}  className={styles.outer} />
  </div>
  <div className={styles.shadow} />
</section>);

ContactBox.propTypes = {
  content: PropTypes.string.isRequired,
  coverTitle: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

ContactBox.defaultProps = {
  content: 'LinkedIn@ZUOQIN HU',
  coverTitle: 'Contact me',
  onHandleClick: () => {
    window.open('https://www.linkedin.com/in/zuoqin-hu-030a7131/', '_blank');
  },
};

export default ContactBox;
