import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentuser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        if(email.includes('@fh-salzburg.ac.at')|| true){
            return auth.createUserWithEmailAndPassword(email,password)
        }else{
            throw new Error('Please use FH-Email')
        }
    }
    function login(email, password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function logout(){
        return auth.signOut()
    }
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }
    function updateEmail(email){
        return currentUser.updateEmail(email)
        .then(() => {
            return sendVerificationLink()
        }).catch((error) => {
            console.log(error)
        })

    }
    function updatePassword(email){
        return currentUser.updatePassword(email)
    }
    async function sendVerificationLink(){

        var actionCodeSettings = {
              // URL you want to redirect back to. The domain (www.example.com) for this
                // URL must be in the authorized domains list in the Firebase Console.
                url: 'https://praktikumsdiary.netlify.app',
                // This must be true.
                handleCodeInApp: true,
                // iOS: {
                //     bundleId: 'com.example.ios'
                // },
                // android: {
                //     packageName: 'com.example.android',
                //     installApp: true,
                //     minimumVersion: '12'
                // },
                // dynamicLinkDomain: 'Authenticate'
          };

        return await auth.currentUser.sendEmailVerification(actionCodeSettings)
            .then((result) => {
                return 'Email sent'
            })
            .catch((error) => {
                console.log(error)
                throw new Error ('Verification-Email failed')
            })
    }
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentuser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        sendVerificationLink
    }
    return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
    )
}
