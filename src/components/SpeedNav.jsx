import React, { useState } from 'react';
import SpeedNavItem from './SpeedNavItem';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SpeedNav({linksObj, slotNum}) {
  const slots = slotNum || 15
  const [open, setOpen] = useState(false);

  const links = linksObj || [
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
    // filter: "drop-shadow(0 0 0.75rem black)",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 1s 0s cubic-bezier(1, -0.67, 0, 1.33)"
  }
  const openStyle = {
    boxShadow: "0 0 0 0.7rem"
  }

  return (
    <div className={`sDParent ${open ? "" : ""}`} style={open ? {...baseStyle, ...openStyle}:{...baseStyle}} onClick={() => setOpen(prev => !prev)}>
      <div style={{fontSize:'3rem', transform: open ? "rotate(45deg)":"" }}>
        <div>
          <div style={{position:'relative', backgroundColor: 'red', borderRadius: '0.1rem', height:'0.5rem', width:'2rem'}}></div>
          <div style={{position:'absolute',backgroundColor: 'red', borderRadius: '0.1rem', height:'0.5rem', width:'2rem', transform:'translateY(-0.5rem) rotate(90deg)'}}></div>
        </div>
      </div>
      <div className={`sDItemParent ${open ? "" : ""}`}>
        {links.map((link, ind) => <SpeedNavItem key={ind} open={open} childInfo={link} slots={slots} />)}
      </div>
    </div>
  );
}

export default SpeedNav;