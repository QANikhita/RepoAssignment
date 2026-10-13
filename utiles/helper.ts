import { Page, TestInfo } from '@playwright/test';

export async function checkStatus(page: Page, testInfo: TestInfo) {
  const isPassed = testInfo.status === testInfo.expectedStatus;
  const status = isPassed ? 'passed' : 'failed';
  const remark = isPassed ? 'Test passed' : (testInfo.error?.message || 'Test failed');

  try {
    await page.evaluate((_) => {}, `lambdatest_action: ${JSON.stringify({
      action: 'setTestStatus',
      arguments: { status, remark }
    })}`);
  } catch {
    console.log("status fetch error")
  }
}