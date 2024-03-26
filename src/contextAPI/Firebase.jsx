import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from 'firebase/app'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

export const FirebaseContext = createContext(null)

const firebaseConfig = {
    apiKey: "AIzaSyCCo6ymcusrWBNZ6Has5gmlZYqfUVwPSdQ",
    authDomain: "necessites-38c57.firebaseapp.com",
    projectId: "necessites-38c57",
    storageBucket: "necessites-38c57.appspot.com",
    messagingSenderId: "372692037946",
    appId: "1:372692037946:web:6c5b6c9e7a484d0b5c6003",
    measurementId: "G-DWZTVQD81R"
};

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider



export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null)
    const [signup, setSignup] = useState(null)
    const [userDetails, setUserDetails] = useState('')

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUser(true)
                setUserDetails(user)
            }
            else setUser(null)
        })
    }, [user])


    const signupUserWithEmailAndPass = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
            .then(() => setSignup(true))
            .catch(error => console.log(error));
    };

    const loginUserWithEmailAndPass = (email, password) => {
        signInWithEmailAndPassword(firebaseAuth, email, password)
    }

    const sendEmailForgotPass = (email) => {
        sendPasswordResetEmail(firebaseAuth, email).then(() => navigate('/reset'))
            .catch((err) => console.log(err.message))
    }
    const isLogin = user ? true : false

    const signinWithGoogle = async () => {
        const resp = await signInWithPopup(firebaseAuth, googleProvider)
        return resp
    }

    const logOut = ()=>firebaseAuth.signOut()

    return <FirebaseContext.Provider value={{
        signupUserWithEmailAndPass,
        loginUserWithEmailAndPass,
        isLogin,
        logOut,
        firebaseAuth,
        sendEmailForgotPass,
        userDetails,
        setUserDetails,
        signinWithGoogle,
        signup
    }}>
        {props.children}
    </FirebaseContext.Provider>
}

export const useFirebase = () => {
    const navigate = useNavigate()
    return useContext(FirebaseContext)
}