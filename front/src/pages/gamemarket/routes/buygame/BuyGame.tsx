import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./buygame.css";

interface BuyGameProps {
  account: string;
}

const BuyGame: FC<BuyGameProps> = ({ account }) => {
  return (
    <>
      <div className="buy-game-container">
        <div>여기는 게임 구매하는 페이지</div>
        <div>카테고리별 필터링 제공, 추천 시스템</div>
        <Link to={`/gamemarket`}>
          <button>게임 메인</button>
        </Link>
        <Link to={`/gamemarket/gamedetail`}>
          <button>게임 상세페이지</button>
        </Link>
      </div>
    </>
  );
};
export default BuyGame;
