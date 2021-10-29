const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (request, response) => {
  console.log(request.url);
  let path = request.url;

  response.setHeader("Content-Type", "text/html;charset=UTF-8");
  switch (path) {
    case "/":
      response.end("這是首頁CCCC");
      break;
    case "/member":
      let htmlContent = await fs.readFile("member.html", "utf-8");
      response.end(htmlContent);
      break;
    default:
      response.statusCode = 404;
      response.end("Not Found");
  }
});

server.listen(3005, () => {
  console.log("網站伺服器啟動嚕 在 3005");
});