import { createServer } from "http";
function requestHandler(req, res) {
  console.log("In comes a request to: ", req.url);

  if (req.url === "/") {
    res.end("Welcome to the homepage!");
  } else if (req.url === "/login") {
    console.log(req);
    res.end("Welcome to the login page!");
  } else {
    res.end("Error! File not found." + req.url);
  }
}
const server = createServer(requestHandler);
server.listen(3002);
