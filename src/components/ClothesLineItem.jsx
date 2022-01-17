import React from "react";

const ClothesLineItem = (props) => {

  return (
    <div style={{position:'relative', display: props.idx === props.active ? "":"none"}}>
      {props.elem.title}
    </div>
  )
}

export default ClothesLineItem;