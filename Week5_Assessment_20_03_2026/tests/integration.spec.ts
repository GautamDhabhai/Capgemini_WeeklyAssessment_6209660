import {test} from '@playwright/test';
import Login from '../PageObjectModel/login.page';
import Checkout from '../PageObjectModel/checkout.page';
import ContactUs from '../PageObjectModel/contactUs.page';

test("login then add prduct and send a message",async({page})=>{
    let login = new Login(page);
    await login.login();
    let checkout = new Checkout(page);
    await checkout.goToProduct();
    await checkout.goToCart();
    await checkout.checkout();
    await checkout.placeOrder();
    await checkout.validateOrderConfirmation();
    const contactUs = new ContactUs(page);
    await contactUs.goToContactUsPage();
    await contactUs.fillContactUsForm();
    await contactUs.validateContactUsConfirmation();
})