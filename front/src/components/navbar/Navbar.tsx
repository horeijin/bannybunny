import React, { useRef, useEffect, FC, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo_white.png";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";

type NavbarProps = {
  children: React.ReactNode;
};

const Navbar: FC<NavbarProps> = ({ children }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isLogged, setisLogged] = useState<boolean>(false);

  useEffect(() => {
    return () => {};
  }, [isLogged]);

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      if (response.data.success) {
        alert("take care!");
        navigate("/login");
      } else {
        alert("Fail to Logout!");
      }
    });
  };

  return (
    <div className="navbar">

       <div className="layout-container">
          <div className="navbar-links">
            <div className="navbar-links_logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>
     
        <div className="navbar-layout">
            <Link to={`/`}>
              <button>Home</button>
            </Link>
            <Link to={`/chronicle`}>
              <button>Chronicle</button>
            </Link>
            <Link to={`/gamemarket`}>
              <button>GameMarket</button>
            </Link>
            <Link to={`/membership`}>
              <button>Membership</button>
            </Link>
          </div>
          {children}
        

      <div className="navbar-sign">
        <>
          <Link to="">
            <button type="button">
              <i className="fa-brands fa-discord"></i>
            </button>
          </Link>
          <Link to="">
            <button type="button">
              <i className="fa-brands fa-twitter"></i>
            </button>
          </Link>
          <Link to="">
            <button type="button">
              <i className="fa-brands fa-medium"></i>
            </button>
          </Link>

          <button type="button" onClick={onClickHandler}>
            <i className="fa-solid fa-door-open"></i>
          </button>

          <Link to="/login">
            <button type="button">
              <i className="fa-solid fa-right-to-bracket"></i>
            </button>
          </Link>
        </>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
