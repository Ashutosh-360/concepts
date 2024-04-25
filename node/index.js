const http = require("http");

// http
//   .createServer((req, res) => {
//     res.write("Hello World!");

//     // Signals the server that all of
//     // the response headers and body
//     // have been sent
//     res.end();
//   })
//   .listen(3000);

let options = {
  host: "www.geeksforgeeks.org",
  path: "/courses",
  method: "GET",
};

// Making a get request to
// 'www.geeksforgeeks.org'
http
  .request(options, (response) => {
    // Printing the statusCode
    console.log(`STATUS: ${response.statusCode}`);
  })
  .end();
