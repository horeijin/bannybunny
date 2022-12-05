import axios from "axios";
import React, { useEffect } from "react";
import { Contents, Event, Roadmap } from "../../components";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./home.css";
import fiveRabbits from "../../assets/home.png";

const Home = () => {
  //const { state } = useLocation();

  // const getAPIData = async () => {
  //   const res = await axios.get("/api/hello");
  //   console.log(res.data);
  //   console.log(state);
  // };

  return (
    <>
      <div className="home_container">
        <div className="first_block">
          <h1>Welcome to Banny World</h1>
          <p>우리의 Banny가 되어 Banny World를 즐겨보세요</p>
          <Link to={`/membership`}>
            <button className="main_btn">Get your NFT</button>
          </Link>
          <img src={fiveRabbits} alt="" />
        </div>
        {/*<p onClick={getAPIData}>getAPIData</p>*/}
      </div>
      <div className="event_container">
        <Event />
      </div>
      <Contents title="Banny World를 즐기는 방법" />
      <Roadmap />
    </>
  );
};

export default Home;
