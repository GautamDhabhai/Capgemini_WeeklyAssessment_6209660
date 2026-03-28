import {test} from '@playwright/test';
import Login from '../PageObjectModel/login.page';
import Review from '../PageObjectModel/review.page'
import Checkout from '../PageObjectModel/checkout.page';


test("login then add prduct and send a message",async({page})=>{
    let login = new Login(page);
    await login.login();
    let checkout = new Checkout(page);
    await checkout.goToProduct();
    await checkout.goToCart();
    await checkout.checkout();
    await checkout.placeOrder();
    await checkout.validateOrderConfirmation();
    let review = new Review(page);
    await review.review();
    await review.fillReview();
    await review.submitReview();
    await review.validateReviewConfirmation();
})