import React from 'react';

export default function (props) {
  return (
    <div id = {props.name} className="section">
      <div className="contents">
        <div className="text-shadow-pop-bottom">
            {props.content}
        </div>
        {/* <lottie-player
          src="https://assets3.lottiefiles.com/private_files/lf30_ucri8zme.json"
          autoplay
          style={{width: '200px', height: '200px', position:"absolute", top:'0', left: '0', transform: 'scaleX(-1)'}}></lottie-player> */}

        <lottie-player
          id="firstLottie"
          src="https://assets7.lottiefiles.com/packages/lf20_tsl69e2f.json"
          autoplay
          loop
          hover="true"
          style={{width: '400px', height: '400px'}}></lottie-player>
      </div>
    </div>
  );
}