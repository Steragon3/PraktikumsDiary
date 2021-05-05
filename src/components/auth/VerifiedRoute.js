import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'

const VerifiedRoute = ({component: Component, ...rest}) => {
  const { currentUser } = useAuth()

  if(currentUser){
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser.emailVerified ? <Component {...props} /> : <Redirect to="/"/>
            }}
        >
        </Route>
    )
  } else {
      return <Redirect to="/login"/>
  }
}

export default VerifiedRoute;
