const { Builder,
        By,
        until } = require('selenium-webdriver');

new Builder()
    .forBrowser('firefox')
    .build()
    .then(driver => {
        return driver.get('https://www.google.com/')
            .then(_=> driver.findElement(By.name('q')).sendKeys('webdriver'))
            .then()
    });