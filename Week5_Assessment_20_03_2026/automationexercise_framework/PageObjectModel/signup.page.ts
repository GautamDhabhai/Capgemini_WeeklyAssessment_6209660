import {Page, Locator} from '../node_modules/@playwright/test';
import data from '../utility/signUp.json';

class Signup{
    nameTF: Locator;
    signupEmailTF: Locator;
    signUpBtn: Locator;
    titleMr: Locator;
    titleMrs: Locator;
    passwordTF: Locator;
    dayDD: Locator;
    monthDD: Locator;
    yearDD: Locator;
    newsLetter: Locator;
    optin: Locator;
    firstNameTF: Locator;
    lastNameTF: Locator;
    companyTF: Locator;
    addressTF: Locator;
    countryDD: Locator;
    stateTF: Locator;
    cityTF: Locator;
    zipCodeTF: Locator;
    mobileNumberTF: Locator;
    createAccountBtn: Locator;
    page: Page;
    // accountCreated: Locator;
    // continueBtn: Locator;

    constructor(page:Page){
        this.nameTF = page.getByTestId('signup-name');
        this.signupEmailTF = page.getByTestId('signup-email');
        this.signUpBtn = page.locator('//button[text()="Signup"]');
        this.titleMr = page.locator('#id_gender1');
        this.titleMrs = page.locator('#id_gender2');
        this.passwordTF = page.getByTestId('password')
        this.dayDD = page.getByTestId('days');
        this.monthDD = page.getByTestId('months');
        this.yearDD = page.getByTestId('years');
        this.newsLetter = page.locator('//input[@id="newsletter"]');
        this.optin = page.locator('//input[@id="optin"]');
        this.firstNameTF = page.getByTestId('first_name');
        this.lastNameTF = page.getByTestId('last_name');
        this.companyTF = page.getByTestId('company');
        this.addressTF = page.getByTestId('address');
        this.countryDD = page.getByTestId('country');
        this.stateTF = page.getByTestId('state');
        this.cityTF = page.getByTestId('city');
        this.zipCodeTF = page.getByTestId('zipcode');
        this.mobileNumberTF = page.getByTestId('mobile_number');
        this.createAccountBtn = page.getByTestId('create-account');
        this.page = page;

    }

    async gotoSignupPage(){
        await this.page.goto(data.url);
        await this.nameTF.fill(data.name);
        await this.signupEmailTF.fill(data.signupMail);
        await this.signUpBtn.click();

    }

    async fillSignUpForm(){
        
        if(data.honorifics === "Mr."){
            await this.titleMr.click();
        }
        else if(data.honorifics === "Mrs."){
            await this.titleMrs.click();
        }

        await this.passwordTF.fill(data.password);
        await this.dayDD.selectOption({value: data.dob.day});
        await this.monthDD.selectOption(data.dob.month);
        await this.yearDD.selectOption({value: data.dob.year});
        await this.newsLetter.click();
        await this.firstNameTF.fill(data.addressInfo.firstName);
        await this.lastNameTF.fill(data.addressInfo.lastName);
        await this.companyTF.fill(data.addressInfo.company);
        await this.addressTF.fill(data.addressInfo.address);
        await this.countryDD.selectOption({value: data.addressInfo.country})
        await this.stateTF.fill(data.addressInfo.state);
        await this.cityTF.fill(data.addressInfo.city);
        await this.zipCodeTF.fill(data.addressInfo.zipCode);
        await this.mobileNumberTF.fill(data.addressInfo.mobileNumber);
        await this.createAccountBtn.click();
        await this.page.waitForTimeout(3000);
        await this.page.screenshot({path: './screenshots/signup.png'});

    }
}

export default Signup;