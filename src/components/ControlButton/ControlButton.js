import React from 'react';
import styles from './ControlButton.module.scss';

const ControlButton = ({img, onclick}) => (
  <button onClick={onclick} className={styles.ControlButton}>
    <img src={img} alt="Controll Button"></img>
  </button>
);


export default ControlButton;
