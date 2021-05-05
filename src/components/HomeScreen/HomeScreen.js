import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeScreen.module.scss';
import StreetMap from '../StreetMap/StreetMap';

const HomeScreen = () => {
  return(
  <div className={styles.HomeScreen}>
  <div className={styles.main}>
    <div className={styles.map}>
      <StreetMap></StreetMap>
    </div>
    <div className={styles.filter}></div>
  </div>
  </div>
)};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;
