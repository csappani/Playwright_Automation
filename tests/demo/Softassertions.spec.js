const {test,expect}=require('@playwright/test')

test("Soft assertions", async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")
    // Hard assetions
    // await expect(page).toHaveTitle("STORE")
    // await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    // await expect.soft(page.locator('.navbar-band')).toBeVisible();

    //Soft assetions
    await expect(page).toHaveTitle("STORE")
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
    await expect.soft(page.locator('.navbar-band')).toBeVisible();
    
})