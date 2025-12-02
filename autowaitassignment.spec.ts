import { expect, test } from "@playwright/test";


test(`Test to learn Xpath locators Selectors`, async ({ page }) => { // page fixture
  //  test.setTimeout(20000)


    await page.goto(`https://leafground.com/waits.xhtml`);
    await expect(page.locator(`(//button[@type='submit'])[1]`)).toBeVisible();//
    //to wait fr an elemrnt to disappear
    await (page.locator(`(//span[@class='ui-button-text ui-c'])[1]`)).click();

    await(page.locator(`//span[text()='Click First Button']`)).click({timeout:3000});
 
    await(page.locator(`(//span[text()='Click'])[3]`)).click();
    
  await expect(page.locator("//span[text()='Did you notice?']")).toHaveText("Did you notice?")

      
   // toHaveText()

})


