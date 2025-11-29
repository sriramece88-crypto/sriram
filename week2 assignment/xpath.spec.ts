import { test } from "@playwright/test";


test(`Test to learn Xpath locators Selectors`,async ({page}) => { // page fixture


   await page.goto(`http://leaftaps.com/opentaps/control/main`)


  await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`); 


  await page.locator(`//input[@id="password"]`).fill(`crmsfa`);


  await page.locator(`//input[@class="decorativeSubmit"]`).click();


  await page.locator(`//a[contains(text(),"CRM")]`).click()


    //await page.waitForTimeout(3000)

    await page.locator(`//a[text()='Create Lead']`).click();
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill(`test`);
    await page.locator(`#createLeadForm_firstName`).fill(`testfill`);
    await page.locator(`#createLeadForm_lastName`).fill(`last`);

    await page.locator(`//input[@value='Create Lead']`).click();

})