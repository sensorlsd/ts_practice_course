const fs = require('fs');

let rawData = fs.readFileSync('C:\\Users\\Dmitry.Nahliuk\\WebstormProjects\\WebDriverSeleniumTest\\src\\data\\sw_gg.json');
let limitsData = JSON.parse(rawData);

console.log(limitsData.EUR.stakeAll);
