// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider, FacebookAuthProvider,  GithubAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC0zKCfsnKhB6dnvZ-WjyMIC9lHISpeOtc",
  authDomain: "routes-ae01c.firebaseapp.com",
  projectId: "routes-ae01c",
  storageBucket: "routes-ae01c.firebasestorage.app",
  messagingSenderId: "675225379485",
  appId: "1:675225379485:web:600ba6232cbab69effea74",
  measurementId: "G-L445Q7SPJK"
};


// const firebaseConfig = {
//   apiKey: "AIzaSyC0zKCfsnKhB6dnvZ-WjyMIC9lHISpeOtc",
//   authDomain: "routes-ae01c.firebaseapp.com",
//   projectId: "routes-ae01c",
//   storageBucket: "routes-ae01c.firebasestorage.app",
//   messagingSenderId: "675225379485",
//   appId: "1:675225379485:web:600ba6232cbab69effea74",
//   measurementId: "G-L445Q7SPJK"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
export {auth, analytics,firestore,provider,facebookProvider,githubProvider};


