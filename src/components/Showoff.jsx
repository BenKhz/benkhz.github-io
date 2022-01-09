import React, { useState } from 'react';
import ClothesLine from './ClothesLine';

export default function (props) {
  const filler = [
    {
      shortText: "Docker",
      thumbUrl: "/images/docker.png"
    },
    {
      shortText: "Postgres",
      thumbUrl: "/images/postgres.png"
    },
    {
      shortText: "React",
      thumbUrl: "/images/react.png"
    },
    {
      shortText: "Redux",
      thumbUrl: "/images/redux.png"
    }
  ]
  const [projects, setProjects] = useState(filler)

  return (
    <div id = {props.name} className="section">
      <div className="contents">
        <div className="text-shadow-pop-bottom">
            <span style={{position:'relative', bottom:'-70vh'}}>{props.content}</span>
        </div>
        <ClothesLine projects={projects}/>
        <lottie-player
          id="firstLottie"
          src="https://assets7.lottiefiles.com/packages/lf20_tsl69e2f.json"
          autoplay
          loop
          style={{width: 'auto', height: '55vh'}}></lottie-player>
      </div>
    </div>
  );
}