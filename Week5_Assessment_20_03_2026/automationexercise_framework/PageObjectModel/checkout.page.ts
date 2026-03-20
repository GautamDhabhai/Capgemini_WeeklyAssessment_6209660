import {Locator, Page, expect} from '@playwright/test';
import data from '../utility/checkout.json';

class Checkout{
    viewFirstProduct: Locator;
    quantityInput: Locator;
    addToCartBtn: Locator;
    successModalConfirmation: Locator;
    viewCartLink: Locator;
    checkoutBtn: Locator;
    orderSuggestionTF: Locator;
    placeOrderBtn: Locator;
    nameOnCardTF: Locator;
    cardNumberTF: Locator;
    cvvTF: Locator;
    expiryMonthTF: Locator;
    expiryYearTF: Locator;
    payBtn: Locator;
    paymentSuccessConfirmation: Locator;
    page: Page;

    constructor(page:Page){
        this.page = page;
        this.viewFirstProduct = page.locator('//a[contains(text(), "View Product")]').first();
        this.quantityInput = page.locator('#quantity');
        this.addToCartBtn = page.locator('//button[@class="btn btn-default cart"]');
        this.viewCartLink = page.getByRole('link', {name: "View Cart"});
        this.successModalConfirmation = page.locator('//div[@class="modal-content"]');
        this.checkoutBtn = page.locator('//a[@class="btn btn-default check_out"]');
        this.orderSuggestionTF = page.locator('//textarea[@name="message"]');
        this.placeOrderBtn = page.locator('//a[@class="btn btn-default check_out"]');
        this.nameOnCardTF = page.getByTestId('name-on-card');
        this.cardNumberTF = page.getByTestId('card-number');
        this.cvvTF = page.getByTestId('cvc');
        this.expiryMonthTF = page.getByTestId('expiry-month');
        this.expiryYearTF = page.getByTestId('expiry-year');
        this.payBtn = page.getByTestId('pay-button');
        this.paymentSuccessConfirmation = page.locator('//p[text()="Congratulations! Your order has been confirmed!"]');

    }

    async goToProduct(){
        await this.viewFirstProduct.click();
        await this.quantityInput.fill('3');
        await this.addToCartBtn.click();
    }

    async goToCart(){
        await expect(this.successModalConfirmation).toBeVisible();
        await this.viewCartLink.click();
        await this.checkoutBtn.click();
    }
    
    async checkout(){
        await this.orderSuggestionTF.fill(data.orderSuggestion);
        await this.placeOrderBtn.click();
    }

    async placeOrder(){
        await this.nameOnCardTF.fill(data.nameOnCard);
        await this.cardNumberTF.fill(data.cardNumber);
        await this.cvvTF.fill(data.cvv);
        await this.expiryMonthTF.fill(data.expiry.month);
        await this.expiryYearTF.fill(data.expiry.year);
        await this.payBtn.click();
        await this.page.waitForTimeout(5000);
    }

    async validateOrderConfirmation(){
        await this.page.screenshot({path: './screenorderConfirmation.png'});
        await expect(this.paymentSuccessConfirmation).toBeVisible();
    }
}

export default Checkout;