import React from 'react';
import PropTypes from 'prop-types';
import {Link, useLocation} from 'react-router-dom'
import styles from './Menu.module.scss';
import { useAuth } from '../../context/AuthContext'

const Menu = () => {
  const { currentUser } = useAuth()
  
  const path = useLocation().pathname
  
  const menu=[
    {
      link: '/',
      display: 'Home'
    },
    {
      link: '/update-profile',
      display: 'Profile'
    },
    {
      link: '/diary',
      display: 'Diary'
    },{
      link: '/Export',
      display: 'Export'
    },{
      link: 'create-intern',
      display: 'Rate Internship'
    }

  ]
  
  if(!currentUser){
    return <div className={styles.EmptyMenu}>
    </div>
  }
  return (
    <div className={styles.Menu}>
      <div className={styles.icon}>
        {currentUser.email[0]}
      </div>
      <nav>
        {menu.map((menuelement, index) => {
          return (
            <Link key={index} to={menuelement.link} className={menuelement.link == path ? styles.active: ""}>{menuelement.display}</Link>
          )
        })}
      </nav>
    </div>
  )
}

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
