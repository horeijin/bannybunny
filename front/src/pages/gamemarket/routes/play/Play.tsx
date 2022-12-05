import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./play.css";
//import { Unity, useUnityContext } from "react-unity-webgl";



interface PlayProps {
  account: string;
}

const Play: FC<PlayProps> = ({ account }) => {
  // const {unityProvider} = useUnityContext({
  //   loaderUrl: "Build/game.loader.js",
  //   dataUrl: "Build/game.data",
  //   frameworkUrl: "Build/game.framework.js",
  //   codeUrl: "Build/game.wasm",
  // });

  return (
    <>
      <div className='play-container'>
          <div>준비 중인 서비스 입니다.</div>
      </div>

    {/*<div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
      <Unity unityProvider={unityProvider} style={{width:600, height:600}}/>
    </div>*/}
    </>
  );
};
export default Play;
