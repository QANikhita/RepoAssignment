// fixtures/testBase.ts
import { test as baseTest, expect } from '@playwright/test';
import { SimpleFormPage } from '../pages/SimpleFormPage';
import { InputFormPage } from '../pages/InputFormPage';
import { SliderFormPage } from '../pages/SliderFormPage';

type MyFixture = {
  simpleFormPage: SimpleFormPage;
  inputPage: InputFormPage;
  slidePage:SliderFormPage;
};

export const test = baseTest.extend<MyFixture>({
  simpleFormPage: async ({ page }, use) => {
    const simpleFormPage = new SimpleFormPage(page);
    await use(simpleFormPage);
  },

  inputPage: async ({ page }, use) => {
    const inputPage = new InputFormPage(page);
    await use(inputPage);
  },

  slidePage:async ({ page }, use) => {
    const slidePage = new SliderFormPage(page);
    await use(slidePage);
}});

export { expect };