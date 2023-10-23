import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/initFirebase";
import { motion, AnimatePresence } from 'framer-motion'
import { animateLogin } from '../utils/animations'
import { useRouter } from "next/router";

const GoogleLogin = ({ formAuth, setFormAuth, loginGoogle }) => {
    const router = useRouter()

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
                <button className="back-login" onClick={loginGoogle(router)}> Login </button>
                <button className='back-login' onClick={() => setFormAuth(false)}>Back</button>
            </motion.div>}
            </AnimatePresence>
        </>
    )
}
export default GoogleLogin