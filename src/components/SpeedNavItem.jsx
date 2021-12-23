import React, {useState} from 'react';

function SpeedNavItem({childInfo, open}) {

  const style = {
    position: 'absolute',
    zIndex: '10000',
    borderRadius: '100%',
    height: '10rem',
    width: '10rem',
    backgroundColor: "darkgrey",
    color: "white",
    filter: "drop-shadow(0 0 0.25rem black)",
    textAlign: "center",
    top: `${14 * Math.sin((childInfo.position * 22.5) * (Math.PI / 180))}rem`,
    right: `${-14 * Math.cos((childInfo.position * 22.5) * (Math.PI / 180))}rem`,
    transitionDelay: `${0.2*childInfo.position}s`
  }

  return (
      <a href={childInfo.href} target="_blank" className={`sDItem ${open ? "":"sD-invisible"}`} style={style} id={childInfo.name}>
      </a>
  );
}

export default SpeedNavItem;