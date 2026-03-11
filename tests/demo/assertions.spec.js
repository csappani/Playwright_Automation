/*
1) expect(page).toHaveUrl
2) expect(page.toHaveTitile()       page has title
3) expect(page).toBeVisible()       Element is visible
4) expect(locator).toBeEnabled()    control is enabled
   expect(locator).toBeDisabled()   Element is disabled
5) expect(locator).toBeChecked()    Radio/Checkbox is checked
6) expect(locator).toHaveAttribute()    Element has attribute
7) expect(locator).toHaveText()     Element matches text 
8) expect(locator).toContainText()  Element contains text
9) expect(locator).toHaveValue(value)   Input has a value
10) expect(locator).toHaveCount()   List or elements has given length
*/

const {test, expect}=require('@playwright/test')

test('Assertions test', async ({page})=>{

    //open app url
    await page.goto("https://demo.nopcommerce.com/register")
    //1) expect(page).toHaveUrl
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
    //2) expect(page.toHaveTitile() page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    //3) expect(page).toBeVisible()     Element is visible
    const logoElement=await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()
    //4) expect(locator).toBeEnabled() control is enabled
    const searchStoreBox=await page.locator("#small-searchterms")
    await expecct(searchStoreBox).toBeEnabled()
    //radio button
    const acceptAllBtn=await page.locator("//font[contains(text(),'Accept all')]")
    await acceptAllBtn.click()
    await expect(maleRadioBtn).toBeChecked()
    //checkbox
    const newsletterCheckbox=await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked()
    //7) expect(locator).toHaveText()
    await expect(await page.locator('.page-title h1')).toHaveText('Register')
    //8) partial text
    await expect(await page.locator('.page-title h1')).toContainText('Reg')
    //9) expect(locator).toHaveValue(value)     Input has a value
    const emailInput=await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')
    //10) expect(locator).toHaveCount()     List of elements has given length
    const options=await pagelocator('select[name="DateOfBirthMonth"] option')
    await expect(options).toHaveCount(13)
    
})