const { User } = require("../models/User");

//app.get("/api/users/auth", auth, (res, req) => { ... });로 넘겨줄 매개변수 auth 만들기
let auth = (req, res, next) => {
  // 클라이언트의 쿠키에서 토큰 가져옴
  let token = req.cookies.x_auth;

  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        error: true,
      });
    req.token = token; //req에 토큰 넣어줌
    req.user = user; //req에 유저정보 넣어줌
    next();
    //app.get("/api/users/auth", auth, (res, req) => { ... });
    //중간에 매개변수로 미들웨어 들어가 있는데, next 안해주면 뒤에 있는 (res, req) => { ... }로 안 넘어가고 auth에 머무름
  });
};

module.exports = { auth };
