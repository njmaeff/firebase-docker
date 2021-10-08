import admin from "firebase-admin"

if (!admin.apps.length) {
    admin.initializeApp({
        projectId: process.env.FIREBASE_PROJECT_ID,
    });
}

export const withFirebaseAdminAuth = () => {
    return admin.auth()
};
