import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import styles from './Menu.module.scss';

const Menu = () => (
  <div className={styles.Menu}>
    <Link to="/update-profile">Update Profile</Link>
    <Link to="/diary">Diary</Link>
    <Link to="/Export">Export</Link>
  </div>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
