import React from 'react';
import Particles from "react-tsparticles";

const App = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} />
  );
};

export default function (props) {
  // Begin Particles nonsense
  // const particlesInit = (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };

  // const particlesLoaded = (container) => {
  // };
  return (
    <div id={props.name} className="section">
      <div className="appear" >
        {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            fpsLimit: 30,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: false,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.9,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "none",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        /> */}
        <div className="contents">
          <div className="text-shadow-pop-bottom">

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
