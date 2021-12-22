import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';

import Mainsail from "./components/Mainsail";
import Showoff from "./components/Showoff";
import Contact from "./components/Contact";
// import SpeedNav from "./components/SpeedNav";

export default function () {
  return (
    <>
    {/* <SpeedNav /> */}
    <ReactFullpage
      navigation
      licenseKey={null}
      sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
      scrollingSpeed={1250}
      render={({ state, fullpageApi }) => {
        return (

          <ReactFullpage.Wrapper>
            <Mainsail content="Hi, my name's Ben!" name="mainsail"/>
            <Showoff content="Ahhhh... not much.. my second section!" name="showoff" />
            <Contact content="This the last one! Wow!" name="contact"/>
          </ReactFullpage.Wrapper>

        );
      }}
      />
      </>
  )
}