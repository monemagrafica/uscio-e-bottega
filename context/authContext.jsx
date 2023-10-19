import { createContext, useContext, useState, useEffect, use } from "react";
import { signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { auth } from '../firebase/initFirebase';


const AuthContext = createContext();

const ContextAuth = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser, 'utente stato');
            if (currentUser) {
                setUser(user)
            } else if (currentUser === null) {
                setUser(false)
                console.log('utente non loggato');
            }
            return () => { unsubscribe(); }

        });
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

    async function login(e, email, password, controlForm, setControlForm) {

        const errori = {
            nofield: 'Campi obbligarori',
            errore: 'Dati non corretti',
            firebase: 'Errore connessione, controllare email e password'
        }

        e.preventDefault()
        signInWithEmailAndPassword(getAuth(), email, password).then((user) => {
            console.log(user);
            router.push('/store')
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                setControlForm(errori.errore)
            } else if (errorCode === 'auth/user-not-found') {
                setControlForm(errori.firebase)
            } else {
                setControlForm(errori.nofield)
            }
            console.log({ errorCode, errorMessage });
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
            setAuthData: setUser
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
