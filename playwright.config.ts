import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
dotenv.config({ path: path.resolve(__dirname, 'credentails.env') });

const getConnectCDP=(capabilities:Record<string,any>)=>{
  return `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
    JSON.stringify(capabilities)
  )}`
}

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  timeout:75000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
     baseURL: process.env.BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects:[{
      name: 'Chrome:Windows 11',
      use: {
        connectOptions: {
          wsEndpoint: getConnectCDP({
            browserName: 'Chrome',
            browserVersion: 'latest',
            'LT:Options': {
              platform: 'Windows 11',
              build: ' Playwright TestBuild Chrome',
              name: 'Test - Chrome Windows 11 Nikitha',
              user: process.env.LT_USERNAME,
              accessKey: process.env.LT_PASSWORD,
              network: true,
              video: true,
              console: true,
             visual: true
            },
          }),
        },
      },
    },{
      name: 'Edge:Windows 11',
      use: {
        connectOptions: {
          wsEndpoint: getConnectCDP({
            browserName: 'MicrosoftEdge',
            browserVersion: 'latest',
            'LT:Options': {
              platform: 'Windows 11',
              build: 'Playwright TestBuild Edge',
              name: 'Test - Microsoft Edge Windows 11 Nikitha',
              user: process.env.LT_USERNAME,
              accessKey: process.env.LT_PASSWORD,
              network: true,
              video: true,
              console: true,
              visual: true,
              channel: 'msedge', 
            },
          }),
        },
      },
    },
    

    
  ],

 
});
