import React from 'react';
import config from '../config.json';
import styles from './Welcome.css';

const Welcome = () => (
  <div className={styles.root}>
    <span>{config.greetText}</span>
    <span className="hello"></span>
  </div>
);

export default Welcome;
