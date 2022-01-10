import { RotateRightTwoTone } from '@mui/icons-material';
import React, {useState} from 'react';

function SpeedNavItem({childInfo, open, slots}) {

  const angle = 360/(slots - 2);

  const style = {
    position: 'absolute',
    borderRadius: '100%',
    height: '4.5rem',
    width: '4.5rem',
    backgroundColor: "darkgrey",
    color: "white",
    filter: "drop-shadow(0 0 0.25rem black)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: `0px`,
    right: `0px`,
    transform: `rotate(0deg)`,
    transitionDelay: `${0.1*childInfo.position}s`
  }
  const styleOpen = {
    top: `${-7 * Math.sin((childInfo.position * angle) * (Math.PI / 180))}rem`,
    right: `${7 * Math.cos((childInfo.position * angle) * (Math.PI / 180))}rem`,
    transform: `rotate(360deg)`
  }
  return (
      <a href={childInfo.href} target="_blank" className={`sDItem ${open ? "":"sD-invisible disabled"}`} style={open ? {...style, ...styleOpen} : style} id={childInfo.name} >
        <div>
          {childInfo.icon}
        </div>
      </a>
  );
}

export default SpeedNavItem;