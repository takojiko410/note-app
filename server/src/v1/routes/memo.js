const router = require("express").Router();
const memoController = require("../controllers/memo");
const tokenHandler = require("../handlers/tokenHandler");

//メモを作成
router.post("/", tokenHandler.verifyToken, memoController.create);

//ログインしているユーザが投稿したメモを全て取得
router.get("/", tokenHandler.verifyToken, memoController.getAll);

//ログインしているユーザが投稿したメモを1つ取得
router.get("/:memo", tokenHandler.verifyToken, memoController.getOne);

module.exports = router;
