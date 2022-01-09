import React from "react";

const ClothesLineItem = (props) => {

  return (
    <div className="clItem">
      <div className="clCard">
        {props.text}
      </div>

    </div>
  )
}

export default ClothesLineItem;