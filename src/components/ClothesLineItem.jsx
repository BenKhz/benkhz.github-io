import React from "react";

const ClothesLineItem = (props) => {
  const active = props.idx > props.active ? 'rotate(45deg)' : props.idx < props.active ? 'rotate(-45deg)': ''
  const style = {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: '5px',
    height: '30vh',
    width: 'auto',
    padding: '2rem',
    position: props.idx === 0 ? 'relative': 'absolute',
    opacity: props.active === props.idx ? '1' : '0',
    transition: 'all 300ms',
    transform: active,
    transformOrigin: '50% 1000px'
    }

  return (
    <div style={style} >
      <p>Some Text</p>
      <p>Some More Text</p>
    </div>
  )
}

export default ClothesLineItem;