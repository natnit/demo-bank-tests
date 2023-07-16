# Test Automation training form jaktestowac.pl


## Links
- course: https://jaktestowac.pl/course/playwright-wprowadzenie/  
- test site: https://demo-bank.vercel.app/  
If link broken check first lesson for update:
https://jaktestowac.pl/lesson/pw1s01l01/  
- code repository: https://github.com/jaktestowac/playwright_automatyzacja_wprowadzenie  


## Commands
- check `NodeJS` version    
`node -v`
- new project with Playwright:  
`npm init playwright@latest`
- record tests for given site  
`npx playwright codegen https://demo-bank.vercel.app/`
- run tests without browser GUI:  
`npx playwright test`
- run test with browser GUI:  
`npx playwright test --headed`
- viewing report  
`npx playwright show-report`



## Playwright Config modifications
- config file `playwright.config.ts`
- disabling browsers, i.e. Firefox:
    ```json
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    ```

## Visual Studio Code Tips&Tricks

- `Preview`: for README.md  
- `Autosave`: in File -> Auto Save  
- `Open timeline`: right click on file (file context menu) to find changes history  
- `Format document`: to format document right click inside document and use `Format Document` OR click somewhere inside text and press `Shift + Alt + F`  

## Playwright Tips&Tricks

- `test.only()` modyfi when you wanna run only one test  
- `object.blur()` method removes keyboard focus from the current element  
-  Option for `generating reports`. See https://playwright.dev/docs/test-reporters  
   reporter: 'html' -> default, always open after test failed  
   reporter: [ ['html', { open: 'never' }] ], -> report is generated in html but it doesn't show immediately  
   reporter: 'line', -> report is generated in terminal output  