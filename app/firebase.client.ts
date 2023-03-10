import { initializeApp } from "firebase/app";
import {setPersistence, GoogleAuthProvider, getAuth, inMemoryPersistence } from "firebase/auth";

const firebaseConfig = initializeApp({
    apiKey: ENV.FIREBASE_API_KEY,
    authDomain: ENV.FIREBASE_AUTH_DOMAIN,
    projectId: ENV.FIREBASE_PROJECT_ID,
    storageBucket: ENV.FIREBASE_APP_STORAGE_BUCKET,
    messagingSenderId: ENV.FIREBASE_APP_MESSAGING_SENDER_ID,
    appId: ENV.FIREBASE_APP_ID,
});

const auth = getAuth(firebaseConfig);

// Let Remix handle the persistence via session cookies.
setPersistence(auth, inMemoryPersistence);
const provider: GoogleAuthProvider = new GoogleAuthProvider();

export { auth, provider };




