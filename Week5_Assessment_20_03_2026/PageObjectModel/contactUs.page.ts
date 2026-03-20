import {Page, Locator, expect} from '@playwright/test';
import data from '../utility/contactUs.json';
import path from 'node:path';

class ContactUs{
    page: Page;
    contactUsLink: Locator;
    nameTF: Locator;
    emailTF: Locator;
    subjectTF: Locator;
    messageTF: Locator;
    submitBtn: Locator;
    fileUpload: Locator;
    successConfirmation: Locator;

    constructor(page: Page){
        this.page = page;
        this.contactUsLink = page.locator('//a[contains(text(), "Contact us")]');
        this.nameTF = page.getByTestId('name');
        this.emailTF = page.getByTestId('email');
        this.subjectTF = page.getByTestId('subject');
        this.messageTF = page.getByTestId('message');
        this.submitBtn = page.getByTestId('submit-button');
        this.successConfirmation = page.locator('//div[@class="status alert alert-success"]');
        this.fileUpload = page.locator('//input[@name="upload_file"]')
    }

    async goToContactUsPage(){
        await this.contactUsLink.click();
    }

    async fillContactUsForm(){
        await this.nameTF.fill(data.name);
        await this.emailTF.fill(data.email);
        await this.subjectTF.fill(data.subject);
        await this.messageTF.fill(data.message);
        await this.fileUpload.setInputFiles(path.join(__dirname, data.filepath));
        this.page.on('dialog', async dialog => {
            await dialog.accept();
        });

        await this.submitBtn.click();
    }

    async validateContactUsConfirmation(){
        await expect(this.successConfirmation).toBeVisible();
    }
}

export default ContactUs;