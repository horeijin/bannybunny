import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./gamedetail.css";

interface GameDetailProps {
  account: string;
}

const GameDetail: FC<GameDetailProps> = ({ account }) => {
  return (
    <>
      <div className="gamedetail-container">
        <div>여기는 게임 정보보는 상세페이지</div>
        <div>게임 타이틀, 오픈일, 개발사, 장르, 가격, 소개내용, 리뷰들</div>
        <Link to={`/gamemarket/buygame`}>
          <button>구매 페이지</button>
        </Link>
      </div>
    </>
  );
};
export default GameDetail;
