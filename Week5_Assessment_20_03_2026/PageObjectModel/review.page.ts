import {Locator, Page, expect} from '@playwright/test';
import data from '../utility/review.json';

class Review{
    page:Page;
    product:Locator;
    continueBtn:Locator;
    reviewButton:Locator;
    nameTF:Locator;
    emailTF:Locator;
    reviewTF:Locator;
    submitReviewButton:Locator;
    reviewConfirmationMessage:Locator;
    constructor(page:Page){
        this.page = page;
        this.product = page.locator('//a[contains(text(), "View Product")]').first();
        this.continueBtn = page.getByTestId('continue-button');
        this.reviewButton = page.locator("button[name='review']");
        this.nameTF = page.locator('//input[@id="name"]');
        this.emailTF = page.locator('//input[@id="email"]');
        this.reviewTF = page.locator('//textarea[@id="review"]');
        this.submitReviewButton = page.locator("//button[@id='button-review']");
        this.reviewConfirmationMessage = page.locator('//div[@class="alert-success alert"]/span');
    }
    async review(){
        await this.continueBtn.click();
        await this.product.click();
    }
    async fillReview(){
        await this.nameTF.fill(data.name);
        await this.emailTF.fill(data.email);
        await this.reviewTF.fill(data.review);
    }
    async submitReview(){
        await this.submitReviewButton.click();
        await this.page.waitForTimeout(2000);
        await this.page.screenshot({path: '.screenshots/screenreviewConfirmation.png'});
    }
    async validateReviewConfirmation(){
        await expect(this.reviewConfirmationMessage).toHaveText("Thank you for your review.");
    }
}

export default Review;