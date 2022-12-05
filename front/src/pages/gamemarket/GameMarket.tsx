import React, { FC, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Play, BuyGame, GameDetail } from "./routes";

const GameMarket: FC = () => {
  const [account, setAccount] = useState<string>("");

  {
    /*
    //메타마스크 주소 가져오는 함수
    const getAccount = async ()=> {
      try{
        if(window.ethereum){
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(accounts[0]);
        }else{
          alert("Please, Install Metamask...");
        }
      }catch(err){
        console.error(err);
      }
    }

    //컴포넌트 마운트, 업데이트 되면 메타마스크 주소 가져오는 함수 실행
    useEffect(()=>{
      getAccount();
    }, []);
  */
  }

  return (
    <>
      {/*<History />*/}
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/play" element={<Play account={account} />} />
      </Routes>
      <Routes>
        <Route path="/buygame" element={<BuyGame account={account} />} />
      </Routes>
      <Routes>
        <Route path="/gamedetail" element={<GameDetail account={account} />} />
      </Routes>
    </>
  );
};

export default GameMarket;
