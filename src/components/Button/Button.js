import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = () => {
  return(
    <div className={styles.Button}>
      Button Component
    </div>
  ); 
}

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
