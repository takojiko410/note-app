const express = require("express");
const app = express();
const PORT = 5050;
const mongoose = require("mongoose");
require("dotenv").config();

//DB接続
try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("DBと接続中・・・");
} catch (error) {
  console.log(error);
}

//ユーザー新規登録API

//ユーザログイン用API

app.listen(PORT, () => {
  console.log("ローカルサーバー起動中");
});
