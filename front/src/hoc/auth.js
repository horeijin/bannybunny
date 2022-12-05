import { Axios } from "axios";
import { useNavigate } from "react-router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

export default function (SpecificComponent, option, AdminRoute = null) {
  //null : 아무나 출입 가능한 페이지
  //true : 로그인한 유저만 출입 가능한 페이지
  //false: 로그인한 유저는 출입 불가능한 페이지

  function AuthenticationCheck() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(`hoc/auth에서 출력한 response : `, response);
        //로그인 안 한 경우
        if (!response.payload.isAuth) {
          if (option) navigate("/login");
        } else {
          //로그인 한 상태
          navigate("/");
        }
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
