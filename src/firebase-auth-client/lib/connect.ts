import firebase from "firebase";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,

    });
}

// configure this variable in a .env file or shell.
if (!!process.env.FIREBASE_AUTH_EMULATOR_HOST) {
    firebase.auth().useEmulator(`http://${process.env.FIREBASE_AUTH_EMULATOR_HOST}`);
}

export const withFirebaseAuth = () => {
    return firebase.auth();
};
