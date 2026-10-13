import { test, expect } from '../fixtures/testBase';
import { checkStatus } from '../utiles/helper';

test.afterEach(async ({ page }, testInfo) => {
    await checkStatus(page, testInfo);
});






test('sliderForm Scinarios ', async ({ page, slidePage }) => {
    const inputValue: number = 95;
    const urlEndpoint = new RegExp("drag-drop-range-sliders-demo")
    await page.goto('');
    await slidePage.navigateSliderFormPage();
    await expect(page).toHaveURL(urlEndpoint);
    await slidePage.dragSliderInput(inputValue);
    await expect(slidePage.dragOutputValue).toHaveText(String(inputValue))



})
