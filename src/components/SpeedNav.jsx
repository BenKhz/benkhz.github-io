import React, {useState} from 'react';
import SpeedNavItem from './SpeedNavItem';

function SpeedNav(props) {

  const [open, setOpen] = useState(false);

  const links = [
    {name: "icon1", icon: "placeholder", position: 0, href: "https://github.com/BenKhz"},
    {name: "icon2", icon: "placeholder", position: 2, href: "https://www.linkedin.com/in/benbernardy/"},
    {name: "icon3", icon: "placeholder", position: 4, href: "https://twitter.com/benkhz"},
  ]

  const baseStyle = {
    position: 'absolute',
    zIndex: '10000',
    borderRadius: '100%',
    height: '4rem',
    width: '4rem',
    backgroundColor: "cornsilk",
    bottom: "5%",
    right: "5%",
    color: "grey",
    filter: "drop-shadow(0 0 0.75rem black)",
    display: "flex",
    flexFlow:"column",
    justifyContent: "flex-start",
    alignItems: "center"
  }

  return (
    <div className={`sDParent ${open ? "sD-rotated": ""}`} style={baseStyle} onClick={() => setOpen(prev => !prev)}>
      <div style={{borderRadius: "100%", backgroundColor:"grey", height:"1rem", width:"1rem"}}></div>

      <div className={`sDItemParent ${open ? "sD-scaled" : ""}`}>
        {links.map((link, ind) => <SpeedNavItem key={ind} open={open} childInfo={link}/>)}
      </div>
    </div>
  );
}

export default SpeedNav;