import {test} from '@playwright/test';
import Login from '../PageObjectModel/login.page';

test("login", async({page}) => {
    let login = new Login(page);
    await login.login();
})