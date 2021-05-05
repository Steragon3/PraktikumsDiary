import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import styles from './Menu.module.scss';
import { useAuth } from '../../context/AuthContext'
const Menu = () => {
  const { currentUser } = useAuth()
  
  if(!currentUser){
    return <div className={styles.EmptyMenu}>
    </div>
  }

  return (
    <div className={styles.Menu}>
      <div className={styles.icon}>

      </div>
      <Link to="/">Home</Link>
      <Link to="/update-profile">Update Profile</Link>
      <Link to="/diary">Diary</Link>
      <Link to="/Export">Export</Link>
    </div>
  )
}

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
