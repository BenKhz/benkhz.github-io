import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';

import Mainsail from "./components/Mainsail";
import Showoff from "./components/Showoff";
import Contact from "./components/Contact";
import SpeedNav from "./components/SpeedNav";

// import GitHubIcon from '@mui/icons-material/GitHub';

export default function () {
  // const links = [{
  //   name: "icon1",
  //   icon: <GitHubIcon fontSize='large' />,
  //   position: 0,
  //   href: "https://github.com/BenKhz"
  // }]
  return (
    <>
    <SpeedNav slotNum={10}/>
    <ReactFullpage
      licenseKey={null}
      sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
      scrollingSpeed={1250}
      navigation
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <Mainsail content="Hi, my name's Ben!" name="mainsail"/>
            <Showoff content="My favorite tech!" name="showoff" />
            <Contact content="Get in Touch!" name="contact"/>
          </ReactFullpage.Wrapper>
        );
      }}
      />
      </>
  )
}