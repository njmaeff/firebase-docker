import {withFirebaseAdminAuth} from "./connect"
import {auth} from "firebase-admin/lib/auth";

export const removeUserByEmail = async (email: string) => {
    const auth = withFirebaseAdminAuth();
    try {
        const firebaseUser = await auth.getUserByEmail(email)
        await auth.deleteUser(firebaseUser.uid);
    } catch (e) {
        if (e.errorInfo.code !== 'auth/user-not-found') {
            throw e;
        }
    }
};

export const addUserByEmail = async (email: string, password: string, props = {} as auth.CreateRequest) => {
    const auth = withFirebaseAdminAuth();
    return await auth.createUser({
        password,
        email,
        emailVerified: true,
        ...props
    });
};
