import React from 'react';
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function (props) {
  return (
    <div id = {props.name} className="section">
      <div className="contents">
        <div className="text-shadow-pop-bottom">
            {props.content}
        </div>
        <a href="BenBernardyResume.pdf" download>
        <lottie-player
          id="firstLottie"
          src="https://assets10.lottiefiles.com/packages/lf20_vqyiiyuz.json"
          hover="true"
          style={{width: '400px', height: '400px'}}></lottie-player>
          </a>
      </div>
    </div>
  );
}