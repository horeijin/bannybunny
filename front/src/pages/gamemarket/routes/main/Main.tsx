import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gameEx from "../../../../assets/prepare.png";
import persona from "../../../../assets/persona.jpeg";
import pokemon from "../../../../assets/pokemon.jpeg";
import "./main.css";

const Main: FC = () => {
  const onGameShopHandler = () => {
    alert("아직 준비중인 서비스입니다");
  };

  return (
    <>
      <div className="game-main-container">
        <div className="navbar-game">
          <Link to={`/gamemarket/buygame`}>
            <button onClick={onGameShopHandler}>
              <i className="fa-brands fa-shopify"></i>
            </button>
          </Link>
        </div>
      </div>
      <div className="game-content-container">
        <div className="game section__padding">
          <div className="game-container">
            <div className="game-container-text">
              <h1>Play List</h1>
            </div>

            <div className="game-container-card">
              <div className="game-card-column">
                <div className="game-card">
                  <div className="game-card-top">
                    <div className="gam-card-top-img">
                      <img src={gameEx} alt="" />
                    </div>
                    <p className="game-title">게임명</p>
                    <Link to={`/gamemarket/gamedetail`}>
                      <button>
                        <i className="fa-solid fa-circle-info"></i>
                      </button>
                    </Link>
                    <Link to={`/gamemarket/play`}>
                      <button>
                        <i className="fa-regular fa-circle-play"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="game-card-column">
                <div className="game-card">
                  <div className="game-card-top">
                    <div className="gam-card-top-img">
                      <img src={persona} alt="" />
                    </div>
                    <p className="game-title">Persona 5 : Royal</p>
                    <button>
                      <i className="fa-solid fa-circle-info"></i>
                    </button>
                    <button>
                      <i className="fa-regular fa-circle-play"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="game-card-column">
                <div className="game-card">
                  <div className="game-card-top">
                    <div className="gam-card-top-img">
                      <img src={pokemon} alt="" />
                    </div>
                    <p className="game-title">Pokemon Violet</p>
                    <button>
                      <i className="fa-solid fa-circle-info"></i>
                    </button>
                    <button>
                      <i className="fa-regular fa-circle-play"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
