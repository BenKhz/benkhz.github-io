import React from "react";

const ClothesLineItem = ({currCardInd, index, text}) => {

  return (
    <div className={`clItem ${index === currCardInd ? "" : "invisible"} ${index > currCardInd ? "prev":""} ${index < currCardInd ? "next":""}`}>
      <div className="clCard">
        {text}
      </div>
    </div>
  )
}

export default ClothesLineItem;