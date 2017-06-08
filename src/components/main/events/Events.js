import React from 'react';
import styles from './Events.css';
import ContactBox from '../../basic/ContactBox';

const Events = (props) => <div className={styles.events}>
  <ContactBox {...props}  />
</div>;

export default Events;