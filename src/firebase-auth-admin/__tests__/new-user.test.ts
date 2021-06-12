import {addUserByEmail, removeUserByEmail} from "../lib/user";

describe('user auth', () => {
    const user = 'default@my.domain'
    beforeEach(async () => {
        await removeUserByEmail(user)
    });
    test('create a new user', async () => {
        const response = await addUserByEmail(user, `password1`, {uid: '1'});
        expect(response.email).toEqual(user);
        expect(response.uid).toEqual('1')
    });
});
