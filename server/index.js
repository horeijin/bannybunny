const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./models/User");
const config = require("./config/key");
const { auth } = require("./middleware/auth");

mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log("mongoDB 연결 성공!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.set("port", process.env.PORT || 3000);

// post 방식의 파라미더 읽기 위한 설정
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//토큰을 쿠키에 저장하기 위한 설정
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// ------------------------------------------------------

app.get("/", (req, res) => res.send("Hello World"));

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userinfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.post("/api/users/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    //로그인 요청한 이메일이 db에 있는지 확인
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "회원이 아닙니다. 회원가입을 해주세요!",
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      //db에 있다면 사용자가 입력한 비번이 저장된 비번과 같은지 확인
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      user.generateToken((err, user) => {
        //비번도 맞다면 토큰 생성
        if (err) return res.status(400).send(err);
        res.cookie("x_auth", user.token).status(200).json({
          //토큰을 쿠키에 저장
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

//회원등급은 여기서 정햐야 할듯...
//role : normal=0, admin=1

app.get("/api/users/auth", auth, (res, req) => {
  //여기까지 넘어온 건 auth 미들웨어 인증 다 통과했다는 뜻
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    nickname: req.user.nickname,
    role: req.user.role,
    image: req.user.image,
    token: req.user.token,
  });
});

app.get("/api/users/logout", auth, (req, res) => {
  User.findByIdAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

app.get("/api/hello", (req, res) => {
  res.send("안녕하세요.");
});

// ------------------------------------------------------

// 에러 발생 시 처리
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

// 웹서버 실행
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
