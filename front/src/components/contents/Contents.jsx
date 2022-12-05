import React from "react";
import "./contents.css";
import nft from "../../videos/content_nft.mp4";
import game from "../../videos/content_game.mp4";
import carrot from "../../videos/content_carrot.mp4";
import { Link } from "react-router-dom";

const Contents = ({ title }) => {
  const onServiceHandler = () => {
    alert("아직 준비중인 서비스입니다");
  };

  return (
    <div className="contents section__padding">
      <div className="contents-container">
        <div className="contents-container-text">
          <h1>{title}</h1>
        </div>

        <div className="contents-container-card">
          <div className="card-column">
            <div className="contents-card">
              <div className="contents-card-top">
                <Link to={`/membership/listnsell`}>
                  <video
                    className="video"
                    width="250"
                    height="250"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={nft} type="video/mp4" />
                  </video>
                  <p className="contents-title">NFT</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="card-column">
            <div className="contents-card">
              <div className="contents-card-top">
                <Link to={`/gamemarket`}>
                <video
                    className="video"
                    width="250"
                    height="250"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={game} type="video/mp4" />
                  </video>
                  <p className="contents-title">Game</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="card-column">
            <div className="contents-card" onClick={onServiceHandler}>
              <div className="contents-card-top">
                <Link to={`/membership/carrotshop`}>
                <video
                    className="video"
                    width="250"
                    height="250"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={carrot} type="video/mp4" />
                  </video>
                  <p className="contents-title">CARROT Shop</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
