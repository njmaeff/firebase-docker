import {withFirebaseAuth} from "../lib/connect";
import {
    addUserByEmail,
    removeUserByEmail
} from "@njmaeff/firebase-auth-admin/lib/user";

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
        const response = await auth.signInWithEmailAndPassword(user, password);
        const token = await response.user.getIdToken();
        expect(token).toBeTruthy()

    });
});

