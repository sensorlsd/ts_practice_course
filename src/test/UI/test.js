let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Create new object XMLHttpRequest
const xhr = new XMLHttpRequest();
const url = 'http://api.cd2.d.skywind-tech.com:8001/api/v1/login';
const body = JSON.stringify({
    secretKey: "MASTER_KEY-swftest_ENTITY-swftest_BRAND",
    username: "swftest_USER",
    password: "swftest_QaZ321!"
});

// Configurate POST request
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

// Send request
xhr.send(body);

console.log(xhr.responseText);

