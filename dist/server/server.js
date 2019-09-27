const http = require('http');
const fs = require('fs');
const port = 3000;
const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('New Node.js server');
};
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
});
fs.writeFileSync('nodes.txt', "data");
//# sourceMappingURL=server.js.map