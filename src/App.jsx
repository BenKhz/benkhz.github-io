import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';

import Section from "./components/Section";

export default function () {
  return (
    <ReactFullpage
      navigation
      licenseKey={null}
      sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
      scrollingSpeed={1250}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Section content="What's up?! My first section" name="one"/>
            <Section content="Ahhhh... not much.. my second section!" name="two" />
            <Section content="This the last one! Wow!" name="three"/>
          </ReactFullpage.Wrapper>
        );
      }}
      />
  )
}