const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));

const { mainRouter, userRouter, galleryRouter, router } = require("./routes");
// 메인페이지 경로
app.use("/main", mainRouter);

// 회원 관련 경로
app.use("/user", userRouter);

// 갤러리 관련 경로
app.use("/gallery", galleryRouter);


app.use("/", router)

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
