import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/initFirebase";
import { motion, AnimatePresence } from 'framer-motion'
import { animateLogin } from '../animations'

const GoogleLogin = ({ formAuth, setFormAuth }) => {

    // Inside AuthProvider
    const provider = new GoogleAuthProvider();

    const login = () => {
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
        console.log('gugol');
    };

    const signOut = async () => {
        await auth.signOut();
        console.log("logout");
    };




    return (
        <>
            <AnimatePresence >   {(formAuth === 2) && <motion.div
                className='wrapperLogin'
                initial='initial'
                animate='animate'
                exit='exit'
                variants={animateLogin}
            >
                <p>Accedi con il tuo account Google</p>
                <button className="back-login" onClick={login}> Login </button>
                <button className='back-login' onClick={()=>setFormAuth(false)}>Back</button>
            </motion.div>}
            </AnimatePresence>
        </>
    )
}
export default GoogleLogin