// const chalk = require("chalk");
// const shareWhateverIWant = require("./share");

// console.log("Hello, mars");

// const arrowFunc = () => "Gizem's favorite animal";

// const isItATrain = arrowFunc();
// console.log("isItATrain:", isItATrain);

// console.log(chalk.bgRed.white("shareWhateverIWant"), shareWhateverIWant);
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write(`<h1>Welcome to the jungle</h1>`);
  }
});

server.listen(5500, () => {
  console.log(`SERVER RUNNING ON 3005`);
});
