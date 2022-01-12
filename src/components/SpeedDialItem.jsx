import React, {useState} from 'react';


function SpeedNavItem({puck, open, slots, idx}) {
  var slots = slots || 12;
  var icon = puck.icon || "?";
  var href = puck.href || "#";
  var position = puck.position || idx;

  const angle = 360/(slots)

  const style = {
    position: idx === 0 ? 'relative': 'absolute',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: '100%',
    zIndex: '0',
    height: '3rem',
    width: '3rem',
    backgroundColor: "darkgrey",
    color: "white",
    display: "flex",
    top: `0px`,
    right: `0px`,
    transform: `rotate(0deg)`,
    transition: `all ${0.2*(idx + 1)}s`,
    opacity:'0'
  }
  const styleOpen = {
    top: `${-7 * Math.sin((position * angle) * (Math.PI / 180))}rem`,
    right: `${7 * Math.cos((position * angle) * (Math.PI / 180))}rem`,
    transform: `rotate(360deg)`,
    opacity:'1'
  }
  return (
      <a href={href || "#"} target="_blank" style={open ? {...style,...styleOpen}: style} >
        <div>
          {icon}
        </div>
      </a>
  );
}

export default SpeedNavItem;