This repository contains plywright automation with UI and API automation
# UI execution commands
npx playwright test -->executes all the tests
npx playright test HomePageTest.spec.js --project=chromium 	--> its execute on specific test and specific chromium browser
npx playwright test .\tests\example.spec.js
npx playwright test --project=chromium
# UI execution commands with headed mode
npx playwright test --project=chromium --headed
# UI execution with debug
npx playwright test --debug
npx playwright test HomePageTest.spec.js --project=chromium --headed --debug
# Show the execution reports
npx playwright show-report -->show the reports
# Add allure-playwright as the reporter in the Playwright configuration file:
npx playwright test --reporter=allure-playwright --project=chromium --headed
allure generate allure-results -o allure-report
allure open allure-report
# API Execution command
npx playwright test tests/apiTests/getAPIRequestTest.spec.js --reporter=allure-playwright --project=chromium --headed
