import React from 'react';
import PropTypes from 'prop-types';
import styles from './ControlButton.module.scss';

const ControlButton = ({img, onclick}) => (
  <button onClick={onclick} className={styles.ControlButton}>
    <img src={img}></img>
  </button>
);


export default ControlButton;
