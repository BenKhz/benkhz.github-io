import React, {useState} from 'react';

function SpeedNav(props) {

  const [open, setOpen] = useState(false);

  const style = {
    position: 'absolute',
    zIndex: '10000',
    borderRadius: '100%',
    height: '5rem',
    width: '5rem',
    backgroundColor: "purple",
    bottom: "5%",
    right: "5%",
    color: "white",
    filter: "drop-shadow(0 0 0.25rem black)",
    textAlign: "center",
  }
  return (
    <div style={style} onClick={() => setOpen(prev => !prev)}>

      {`${open}`}
    </div>
  );
}

export default SpeedNav;