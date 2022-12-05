import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { Axios } from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_action";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault(); //페이지 리프레시 되는 것 방지
    //console.log("Email : ", email);
    //console.log("Password : ", password);

    let body = { email: email, password: password };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        alert(`로그인하였습니다.`);
        navigate("/", { state: body.email });
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div className="login section__padding">
      <div className="login-container">
        <h1>Login</h1>
        <form
          className="login-writeForm"
          autoComplete="off"
          onSubmit={onSubmitHandler}
        >
          <div className="login-formGroup">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={onEmailHandler}
            />
          </div>
          <div className="login-formGroup">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onPasswordHandler}
            />
          </div>

          <div className="login-button">
            <button className="login-writeButton" type="submit">
              <span>Login</span>
            </button>
            <Link to="/register">
              <button className="login-reg-writeButton">
                <span>Register</span>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
