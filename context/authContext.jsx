import { createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase/initFirebase';

const ContextAuth = ({ children }) => {
    const AuthContext = createContext();

    return (
        <AuthContext.Provider authData={{ name: "pippo" }}>
            {children}
        </AuthContext.Provider>
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
