import React, {useState} from 'react';
import SpeedNavItem from './SpeedNavItem';

function SpeedNav(props) {

  const [open, setOpen] = useState(false);

  const links = [
    {name: "icon1", onClick: (e) => {console.log(e.target)}, position: 1},
    {name: "icon2", onClick: (e) => {console.log(e.target)}, position: 2},
    {name: "icon3", onClick: (e) => {console.log(e.target)}, position: 3},
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
    filter: "drop-shadow(0 0 0.25rem black)",
    textAlign: "center",
  }

  return (
    <div className={`sDParent ${open ? "sD-rotated": ""}`} style={baseStyle} onClick={() => setOpen(prev => !prev)}>
      <div className={`sDItemParent ${open ? "sD-scaled" : ""}`}>
        {links.map((link, ind) => <SpeedNavItem key={ind} open={open} childInfo={link}/>)}
      </div>
    </div>
  );
}

export default SpeedNav;