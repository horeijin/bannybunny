import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Event, Contents } from "../../../../components";
import "./main.css";
import tempVid from "../../../../videos/banny6.mp4";

interface MainProps {
  account : string;
}

const Main: FC<MainProps> = ({account}) => {


  return (
    <>
    {account ? (
    <>
      <div className="market-container">
        <div className="speech">동료와 함께하고 싶어!</div>
        <video
          className="video"
          width="250"
          height="250"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={tempVid} type="video/mp4" />
        </video>
        <h3>갓 태어난 각성자</h3>
        <div className="bobble">
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <div className="bobble">
          nickname
        </div>
        <div className="bobble">
          30 CARROTS
        </div>
        <div className="bobble">
          1 Check
        </div>
        <div className="bobble">
         2022-12-01
        </div>
      </div>
      <div className="membership_main_block">
        <h1>출석 체크</h1>
        <p>매일매일 CARROT을 모으고 이벤트에 참여해보세요!</p>
        <button className="attend_btn">출석하기</button>
      </div>
      <div className="event_container">
        <Event />
      </div>
      <Contents title="Play Ground" />
      </>
      ):(
        <div className="market-container">
          <h3>No Wallet Connected!</h3>
          <p>멤버십 서비스를 원하시면 전자지갑을 연결해주세요.</p>
        </div>
      )}
      </>
  );
};

export default Main;
