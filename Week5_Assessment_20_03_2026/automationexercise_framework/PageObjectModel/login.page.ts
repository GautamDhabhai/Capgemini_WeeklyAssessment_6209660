import {Page, Locator} from '../node_modules/@playwright/test';
import data from '../utility/login.json';

class Login{
    page: Page;
    loginMailTF: Locator;
    passwordTF: Locator;
    loginBtn: Locator

    constructor(page: Page){
        this.page = page;
        this.loginMailTF = page.getByTestId('login-email');
        this.passwordTF = page.getByTestId('login-password');
        this.loginBtn = page.getByTestId('login-button');
    }

    async login(){
        await this.page.goto(data.url);
        await this.loginMailTF.fill(data.email);
        await this.passwordTF.fill(data.password);
        await this.loginBtn.click();
    }
}

export default Login;