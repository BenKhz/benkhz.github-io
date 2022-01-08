import React, {useState} from 'react';

function SpeedNavItem({childInfo, open}) {

  const style = {
    position: 'absolute',
    zIndex: '-1000',
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
    transitionDelay: `${0.05*childInfo.position}s`
  }
  const styleOpen = {
    top: `${-7 * Math.sin((childInfo.position * 22.5) * (Math.PI / 180))}rem`,
    right: `${7 * Math.cos((childInfo.position * 22.5) * (Math.PI / 180))}rem`,
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