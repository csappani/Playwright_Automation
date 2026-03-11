const {test, expect}=require('@playwright/test')

test('Handle dropdowns', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Select multiple options from multi select dropdown
    // await page.selectOption('#colors',['Blue','Red','Yellow'])
    
    //Assertions
    //1) check of options in dropdown
    // const options = await page.locator('#colors option')
    // await expect(options).toHaveCount(5) 

    //2) check the no of options in dropdown using JS array
    // const options = await page.$$('#colors option')
    // console.log("Numbers of otions:", options.length)
    // await expect(options.length).toBe(5)

    //3) check presence of value in the drodown
    const content=await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();

    await page.waitForTimeout(5000);

})