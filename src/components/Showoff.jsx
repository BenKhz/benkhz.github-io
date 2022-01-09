import React, { useState } from 'react';
import ClothesLine from './ClothesLine';

export default function (props) {
  const sampleProject = {
    shortText: "Some Short Descirption",
    longText: "An actual long description about the product, Ideally taken from the githubs Readme",
    repoUrl: "www.github.com/benkhz",
    thumbUrl: "https://dummyimage.com/240X240/ff0095/fff.jpg&text=Placeholder"
  }
  const sampleProject2 = {
    shortText: "Some Short222 Descirption",
    longText: "An actual2222 long description about the product, Ideally taken from the githubs Readme",
    repoUrl: "www.github.com/benkhz",
    thumbUrl: "https://dummyimage.com/240X240/ff0095/fff.jpg&text=Placeholder"
  }
  const [projects, setProjects] = useState([sampleProject, sampleProject2])
  return (
    <div id = {props.name} className="section">
      <div className="contents">
        <div className="text-shadow-pop-bottom">
            <span>{props.content}</span>
        </div>
        <ClothesLine projects={projects}/>
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