import {test, expect} from '@playwright/test';
import Checkout from '../PageObjectModel/checkout.page';
import Login from '../PageObjectModel/login.page';

test("checkout end to end", async({page}) => {
    let login = new Login(page);
    await login.login();
    let checkout = new Checkout(page);
    await checkout.goToProduct();
    await checkout.goToCart();
    await checkout.checkout();
    await checkout.placeOrder();
    await checkout.validateOrderConfirmation();
    
})