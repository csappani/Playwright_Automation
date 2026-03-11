// const {test, expect} = require ('@playwright/test')

// const {hello, helloworld} = require('./demo/hello')

// console.log (hello());
// console.log (helloworld());

import {test, expect} from '@playwright/test'

test('My first test', async({page})=>{
    await page.goto('https://google.com')
    await expect (page).toHaveTitle('Google')
});

