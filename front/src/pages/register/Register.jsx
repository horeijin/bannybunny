import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/user_action";

const Register = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onNicknameHandler = (e) => {
    setNickname(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault(); //페이지 리프레시 되는 것 방지
    //console.log("Email : ", email);
    //console.log("Password : ", password);

    if (password !== confirmPassword) {
      return alert("입력한 비밀번호가 다릅니다.");
    }

    let body = {
      email: email,
      nickname: nickname,
      password: password,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate("/login");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div className="register section__padding">
      <div className="register-container">
        <form
          className="register-writeForm"
          autoComplete="off"
          onSubmit={onSubmitHandler}
        >
          <div className="register-formGroup">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={onEmailHandler}
            />
          </div>
          <div className="register-formGroup">
            <label>NickName</label>
            <input
              type="text"
              placeholder="Nickname"
              value={nickname}
              onChange={onNicknameHandler}
            />
          </div>
          <div className="register-formGroup">
            <label>Password</label>
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={onPasswordHandler}
            />
          </div>
          <div className="register-formGroup">
            <label>Confirm Password</label>
            <input
              type="text"
              placeholder="confirm Password"
              value={confirmPassword}
              onChange={onConfirmPasswordHandler}
            />
          </div>
          <div className="register-button">
            <button className="register-writeButton" type="submit">
              register
            </button>
            <Link to="/login">
              <button className="reg-login-writeButton">Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
