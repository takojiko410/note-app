const express = require("express");
const app = express();
const PORT = 5050;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

//ユーザー新規登録API

//ユーザログイン用API

app.listen(PORT, () => {
  console.log("ローカルサーバー起動中");
});
