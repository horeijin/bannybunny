import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

//리듀서로 넘겨줄 액션
export function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((response) => response.data);
  return {
    type: LOGIN_USER,
    payload: request, //payload안에 담긴 내용 = loginSuccess:true와 userId
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post("/api/users/register", dataToSubmit)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request, //payload안에 담긴 내용 = success:true
  };
}

export function auth() {
  const request = axios
    .get("/api/users/auth")
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}
