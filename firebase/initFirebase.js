import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
initializeApp({
  apiKey: "AIzaSyCPBioSozTKawGag568eidc1aNLWStimz8",
  authDomain: "uscio-e-bottega.firebaseapp.com",
  databaseURL: "https://uscio-e-bottega.firebaseio.com",
  projectId: "uscio-e-bottega",
  storageBucket: "uscio-e-bottega.appspot.com",
  messagingSenderId: "432749972173",
  appId: "1:432749972173:web:45de77219ee2ed2ee1b784"
});
// Initialize Firebase

// export Firebase so it can be used elsewhere 
const firestore = getFirestore();

export { firestore };