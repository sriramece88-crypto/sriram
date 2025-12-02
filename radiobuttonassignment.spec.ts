import { expect, test } from "@playwright/test";


test(`Test to learn Xpath locators Selectors`, async ({ page }) => { // page fixture
  //  test.setTimeout(20000)


    await page.goto(`https://leafground.com/radio.xhtml`);

    //identify and assert default selected radio button
    //await expect(page.locator("(//span[@class=`ui-radiobutton-icon ui-icon ui-icon-bullet ui-c`])[4")).toBeChecked()
    const defaultradiobutton=page.locator("(//label[text()='Safari'])[2]")
    await expect(defaultradiobutton).toBeChecked();
 const favbrowser=page.locator(`(//label[text()='Chrome'])[1]`)
await expect (favbrowser).toBeEnabled();

await page.locator(`//label[text()='Chennai']`).click();

const agegroup=page.locator("//label[text()='21-40 Years']")
await expect (agegroup).toBeChecked();

    //await expect(page.locator("(//span[@class="ui-radiobutton-icon ui-icon ui-icon-bullet ui-c"])[4]")).toBeEnabled()

})