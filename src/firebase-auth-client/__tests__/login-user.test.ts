import {withFirebaseAuth} from "../index";
import {signInWithEmailAndPassword} from "firebase/auth";
import {
    addUserByEmail,
    removeUserByEmail
} from "@njmaeff/firebase-auth-admin/user";

describe('authentication', () => {
    const user = 'default@my.domain'
    const password = `password1`;

    beforeEach(async () => {
        await addUserByEmail(user, password);
    });

    afterEach(async () => {
        await removeUserByEmail(user)
    });

    test('login', async () => {
        const auth = withFirebaseAuth();
        const response = await signInWithEmailAndPassword(auth, user, password);
        const token = await response.user.getIdToken();
        expect(token).toBeTruthy()

    });
});
