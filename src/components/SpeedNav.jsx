import React, { useState } from 'react';
import SpeedNavItem from './SpeedNavItem';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SpeedNav(props) {

  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "icon1",
      icon: <GitHubIcon fontSize='large' />,
      position: 0,
      href: "https://github.com/BenKhz"
    },
    {
      name: "icon2",
      icon: <LinkedInIcon fontSize='large'/>,
      position: 2,
      href: "https://www.linkedin.com/in/benbernardy/"
    },
    {
      name: "icon3",
      icon: <TwitterIcon fontSize='large' />,
      position: 4,
      href: "https://twitter.com/benkhz"
    }
  ]

  const baseStyle = {
    position: 'absolute',
    zIndex: '10000',
    borderRadius: '100%',
    height: '3.5rem',
    width: '3.5rem',
    backgroundColor: "cornsilk",
    bottom: "5%",
    right: "5%",
    color: "grey",
    filter: "drop-shadow(0 0 0.75rem black)",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <div className={`sDParent ${open ? "" : ""}`} style={baseStyle} onClick={() => setOpen(prev => !prev)}>
      <div style={{fontSize:'3rem', transition: "all 750ms cubic-bezier(1,-0.32, 0.1, 0.15)", transform: open ? "rotate(45deg)":"" }}>+</div>
      <div className={`sDItemParent ${open ? "" : ""}`}>
        {links.map((link, ind) => <SpeedNavItem key={ind} open={open} childInfo={link} />)}
      </div>
    </div>
  );
}

export default SpeedNav;