import React, {useState, useEffect}from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import {useAuth} from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout, sendVerificationLink } = useAuth()
    const history = useHistory()

    // useEffect(() => {
    //     logout()
    // }, [])

    async function handleLogout(){
        setError('')

        try{
            await logout()
            history.push('/login')
        }catch{
            setError('Failed to log out')
        }
    }

    
    console.log(currentUser)
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong>{currentUser.email}
                    {console.log(currentUser.uid)}
                    <Link to="update-profile" className="btn btn-primary w-100 mt-3">
                        Update Profile
                    </Link>
                </Card.Body>
            </Card>

            {!currentUser.emailVerified && <Alert variant="danger">Not Verified, please check your Emails</Alert>}
            
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
