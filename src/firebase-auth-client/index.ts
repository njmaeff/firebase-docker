import {getApps, initializeApp} from "firebase/app";
import {connectAuthEmulator, getAuth} from "firebase/auth";


const apps = getApps();
if (!apps.length) {
    initializeApp({
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    });
}

if (!!process.env.FIREBASE_AUTH_EMULATOR_HOST) {
    const auth = getAuth()
    connectAuthEmulator(auth, `http://${process.env.FIREBASE_AUTH_EMULATOR_HOST}`)
}

export const withFirebaseAuth = () => {
    return getAuth();
};
