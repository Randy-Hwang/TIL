// Node.js or Express와 React를 연동하려면
// 완성된 리액트 파일 npm run build

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "프로젝트이름/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build 폴더 안의 html파일 경로"));
});

// 열어보려면 nodemon server.js OR node server.js
