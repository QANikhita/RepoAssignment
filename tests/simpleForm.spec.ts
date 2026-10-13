
import { test, expect } from '../fixtures/testBase';
import { checkStatus } from '../utiles/helper';

test.afterEach(async ({ page }, testInfo) => {
  await checkStatus(page, testInfo);
});



test(" simpleForm scinario  ", async({page,simpleFormPage})=>{
    const customeText= "Welcome to TestMu AI"
    const urlEndpoint= new RegExp('/simple-form-demo/');
    await page.goto('')
    await simpleFormPage.clickOnSimpleDemoForm();
     await expect(page).toHaveURL(urlEndpoint);
     await simpleFormPage.enterMessage(customeText);
     await simpleFormPage.submitMessage();
     await expect(simpleFormPage.messageText).toContainText(customeText);

})


