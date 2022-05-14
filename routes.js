const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>message</title></head>");
    res.write(
      '<body><form action="/message" method="POST" ><input type="text" name="kkk" ><button type="submit" >Send</button></form >'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chuck) => {
      body.push(chuck);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];

      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hello World</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
};
// module.exports = {
//     handler : requestHandler,
//     somText : 'hello '}
exports.handler = requestHandler