import React from 'react';
import ClothesLine from './ClothesLine';

export default function (props) {
  return (
    <div id = {props.name} className="section">
      <div className="contents">
        <div className="text-shadow-pop-bottom">
            <span>{props.content}</span>
        </div>
        <ClothesLine />
        {/* <lottie-player
          src="https://assets3.lottiefiles.com/private_files/lf30_ucri8zme.json"
          autoplay
          style={{width: '200px', height: '200px', position:"absolute", top:'0', left: '0', transform: 'scaleX(-1)'}}></lottie-player> */}

        <lottie-player
          id="firstLottie"
          src="https://assets7.lottiefiles.com/packages/lf20_tsl69e2f.json"
          autoplay
          loop
          style={{width: '400px', height: '400px'}}></lottie-player>
      </div>
    </div>
  );
}