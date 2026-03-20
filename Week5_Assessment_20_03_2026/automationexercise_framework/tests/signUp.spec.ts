import {test} from '@playwright/test';
import Signup from '../PageObjectModel/signup.page';


test("signup", async ({page}) => {
    const signup = new Signup(page);
    await signup.gotoSignupPage();
    await signup.fillSignUpForm();
})