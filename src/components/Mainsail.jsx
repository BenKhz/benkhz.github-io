import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect'

export default function (props) {
  const meDescripts = [
    "RESTful API builder!",
    "Pinball Wizard!",
    "and Fullstack Dev!",
  ]
  return (
    <div id={props.name} className="section">
      <div className="appear" >
        <div className="contents">
          <div className="">
            <p> Hi, My name is <strong className="text-shadow-pop-bottom" style={{ fontSize: '4rem' }}>Ben</strong> and I'm a ...</p>
            <TypeWriterEffect
              style={{ display: "flex", justifyContent: "center" }}
              startDelay={50}
              cursorColor="white"
              multiText={meDescripts}
              typeSpeed={100}
            />
          </div>
          <lottie-player
            id="firstLottie"
            src="https://assets3.lottiefiles.com/packages/lf20_agv3n7ho.json"
            autoplay
            speed="0.5"
            style={{ width: '400px', height: '400px' }}></lottie-player>
        </div>
      </div>
    </div>

  );
}
