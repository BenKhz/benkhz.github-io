import React, { useState } from "react";
import SpeedDialItem from "./SpeedDialItem";
import SpeedDialDefaults from "./SpeedDialDefaults";


const SpeedDial = (props) => {
  const [open, setOpen] = useState(false);
  const { pucks, slots, openIcon, closeIcon, sx } = props;

  const mappedPucks = pucks.map((puck,idx) => {
    return <SpeedDialItem puck={puck} open={open} slots={slots} key={idx} idx={idx} />
  })

  return (
    <div className={`SD-contain ${ open ? "":""}`} onClick={() => setOpen(prev => !prev)}>
       <div className="SD-puckContainer" >
          {mappedPucks}
      </div>
        <div className={`SD SD-badge ${open ? "SD-active":""}`} style={{display:'flex', justifyContent:"center", position:'absolute', alignItems:"center"}}>
          {open ? openIcon || <SpeedDialDefaults /> : closeIcon || <SpeedDialDefaults />}

        </div>
    </div>
  )
}
export default SpeedDial;