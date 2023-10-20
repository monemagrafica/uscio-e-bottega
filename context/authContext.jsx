import { createContext, useContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { auth } from '../firebase/initFirebase';

const errori = {
    nofield: 'Campi obbligarori',
    errore: 'Dati non corretti',
    firebase: 'Errore connessione, controllare email e password'
}

const AuthContext = createContext();

const ContextAuth = ({ children }) => {

    const [user, setUser] = useState(null)
    const [erroriFirebase, setErroriFirebase] = useState(null)

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            } else if (currentUser === null) {
                setUser(false)
                console.log('utente non loggato');
            }
            return () => { unsubscribe(); }
        })




    }, [auth]);

    const provider = new GoogleAuthProvider();

    const loginGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;

                console.log({ credential, token, user });
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log({ errorCode, errorMessage, email, credential });
            });

    };

    function login(email, password,) {

        signInWithEmailAndPassword(getAuth(), email, password).then((user) => {

            if (JSON.parse(localStorage.getItem('userEmail')) !== email) {
                localStorage.removeItem('cart')
                localStorage.removeItem('userEmail')
                localStorage.setItem('userEmail', JSON.stringify(user.user.email))
            } else { localStorage.setItem('userEmail', JSON.stringify(user.user.email)) }
            router.push('/store')
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                setErroriFirebase('Password errata')
            } else if (errorCode === 'auth/user-not-found') {
                setErroriFirebase('Utente non trovato')
            } else {
                setErroriFirebase(errori.nofield)
            }
            console.log({ errorCode, errorMessage });
        }
        )

    }

    function handleSignUp(email, password) {

        createUserWithEmailAndPassword(getAuth(), email, password).then((user) => {
            console.log(user);
        }).catch((error) => {
            setTimeout(() => {
                setErroriFirebase('')
            }, 5000);
            const errorCode = error.code;
            if (errorCode === 'auth/email-already-in-use') {
                setErroriFirebase('Email già in uso')
            } else if (errorCode === 'auth/invalid-email') {
                setErroriFirebase('Email non valida')
            }

        }
        )
    }

    function logOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('logout');
            setUser(null)
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    return (
        <AuthContext.Provider value={{
            loginGoogle: loginGoogle,
            login: login,
            logOut: logOut,
            authData: user,
            setAuthData: setUser,
            handleSignUp: handleSignUp,
            erroriFirebase: erroriFirebase,

        }}>
            {children}
        </AuthContext.Provider >
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};

export { ContextAuth, useAuth };
