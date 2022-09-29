const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.static("./dist"));

// app.use("/static/index", (req, res) => {
//   const filename = "./dist/static/index.html";
//   fs.readFile(filename, (err, result) => {
//     res.set("content-type", "text/html");
//     res.send(result);
//     res.end();
//   });
// });

const point = 7003;
app.listen(point);