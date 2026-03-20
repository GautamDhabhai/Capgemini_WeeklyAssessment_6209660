import {test} from '@playwright/test'
import ContactUs from '../PageObjectModel/contactUs.page';
import Login from '../PageObjectModel/login.page';

test('Contact Us Form', async ({page}) => {
    const login = new Login(page);
    await login.login();
    const contactUs = new ContactUs(page);
    await contactUs.goToContactUsPage();
    await contactUs.fillContactUsForm();
    await contactUs.validateContactUsConfirmation();
})