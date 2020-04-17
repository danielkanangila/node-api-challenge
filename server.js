const http = require("http");
const app = require("./app");
const env = process.env;

const server = http.createServer(app);

server.listen(env.port, () => {
    console.log(`Server listen on ${env.host}:${env.port}`);
});
