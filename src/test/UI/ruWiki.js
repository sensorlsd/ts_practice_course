
const  {
    Builder,
    By,
    Key,
    until } = require('selenium-webdriver');

(async function openWikiPage() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://ru.wikipedia.org');
        await driver.findElement(By.name('q'))
                    .sendKeys('webdriver');
        await driver.wait(until.titleMatches)
        await driver.wait(until.titleIs('Википедия — свободная энциклопедия'), 1000);
    } finally {
        await driver.getTitle();
        await driver.quit();
    }
})();
