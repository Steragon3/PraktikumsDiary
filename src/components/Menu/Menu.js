import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
import styles from './Menu.module.scss';
import { useAuth } from '../../context/AuthContext'
import InfoIcon  from '../../components/InfoIcon/InfoIcon'


const Menu = () => {
  const { currentUser } = useAuth()
  const [editing, setEditing] = useState(false)
  const path = useLocation().pathname
  
  const menu=[
    {
      link: '/',
      display: 'Home'
    },
    {
      link: '/profile',
      display: 'Profile'
    },
    {
      link: '/diary',
      display: 'Diary'
    },{
      link: '/export',
      display: 'Export'
    },{
      link: '/rate',
      display: 'Rate Internship'
    },{
      link: '/impressum',
      display: 'Impressum'
    }
  ]
  
  if(!currentUser){
    return <div className={styles.EmptyMenu}>
    </div>
  }

  
  return (
    <div className={styles.Menu}>
        <Link to="/profile">
      <div className={styles.icon}>
          {currentUser.email[0]}
      </div>
        </Link>
      
        <nav>
          {menu.map((menuelement, index) => {
            return (
              <Link key={index} to={menuelement.link} className={menuelement.link === path ? styles.active: ""}>{menuelement.display}</Link>
            )
          })}
        </nav>
        {path === "/diary" && 
          <div className={styles.infoDiv}>
            {editing && <InfoIcon/>}
            <i className={styles.icons + " material-icons"} onClick={()=>setEditing(!editing)}>help</i>
          </div>    
        }
      
    </div>
  )
}

export default Menu;
