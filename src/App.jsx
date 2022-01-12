import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';

import Mainsail from "./components/Mainsail";
import Showoff from "./components/Showoff";
import Contact from "./components/Contact";
import SpeedDial from "./components/SpeedDial";

import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TagRoundedIcon from '@mui/icons-material/TagRounded';

export default function () {
  const pucks = [
    {
      name: "icon1",
      icon: <GitHubIcon fontSize='large' />,
      position: 0,
      href: "https://github.com/BenKhz"
    },
    {
      name: "icon2",
      icon: <LinkedInIcon fontSize='large'/>,
      position: 1,
      href: "https://www.linkedin.com/in/benbernardy/"
    },
    {
      name: "icon3",
      icon: <TwitterIcon fontSize='large' />,
      position: 2,
      href: "https://twitter.com/benkhz"
    },
  ]
  return (
    <>
    <SpeedDial pucks={pucks} closeIcon={<TagRoundedIcon fontSize="large"/>}/>
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