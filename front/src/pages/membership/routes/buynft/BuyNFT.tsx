import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";



const BuyNFT: FC = () => {
  return (
    <>
      <div>여기는 다른 회원들이 판매로 돌려놓은 NFT들 구매하는 페이지</div>
      <Link to={`/membership/listnsell`}>
        <button>구매</button>
      </Link>
    </>
  );
};

export default BuyNFT;
