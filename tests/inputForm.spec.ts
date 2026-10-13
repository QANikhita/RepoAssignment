import { test, expect } from '../fixtures/testBase';
import { checkStatus } from '../utiles/helper';

test.afterEach(async ({ page }, testInfo) => {
  await checkStatus(page, testInfo);
});




test('inputForm scinario', async ({ page,inputPage }) => {

    const expectedMessage = "Thanks for contacting us, we will get back to you shortly."
    await page.goto('');
    await inputPage.navigateInputForm();
    const urlEndpoint = new RegExp('/input-form-demo/');
    await expect(page).toHaveURL(urlEndpoint);
    await inputPage.clickOnSubmitButton();
    const message = await inputPage.nameInputField.first().evaluate((el: HTMLInputElement) => el.validationMessage)
    expect(message).toMatch(/Please fill (out|in) this field/i);

    // form filling process
    await inputPage.enterNameField('Nikitha');
    await inputPage.enterEmail('nikithaQA@gmail.com');
    await inputPage.enterPassword('Test@1234');
    await inputPage.enterCompany('QA Company');
    await inputPage.enterWebsiteUrl('https://www.qa.com');
    await inputPage.selectCountryOption('United States');
    await inputPage.enterCity('Banglore  ');
    await inputPage.enterAddress01('Banglore curch ');
    await inputPage.enterAddress02('Banglore testing');
    await inputPage.enterState('Karnataka');
    await inputPage.enterZip('560097');
    await inputPage.clickOnSubmitButton();
    await expect(inputPage.successMessageText).toContainText(expectedMessage);


})