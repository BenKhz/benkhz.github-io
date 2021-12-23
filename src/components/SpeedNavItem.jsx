import React, {useState} from 'react';

function SpeedNavItem({childInfo, open}) {

  const style = {
    position: 'absolute',
    zIndex: '10000',
    borderRadius: '100%',
    height: '4rem',
    width: '4rem',
    backgroundColor: "darkgrey",
    color: "white",
    filter: "drop-shadow(0 0 0.25rem black)",
    textAlign: "center",
    top: `${5*childInfo.position}rem`,
    // right: `${5*childInfo.position}rem`,
    transitionDelay: `${0.25*childInfo.position}s`
  }

  return (
      <div className={`sDItem ${open ? "":"sD-invisible"}`} style={style} onClick={childInfo.onClick} id={childInfo.name}>
        {`The cosine is : ${Math.cos((30 *childInfo.position) * (Math.PI /180))}`}

      </div>
  );
}

export default SpeedNavItem;