import React from "react";

const ClothesLineItem = ({currCardInd, index, text, image}) => {

  return (
    <div className={`clItem ${index === currCardInd ? "" : "invisible"} ${index > currCardInd ? "prev":""} ${index < currCardInd ? "next":""}`}>
      <div className="clCard" style={{backgroundImage:`url(${image})`}}>
        {/* {text} */}
      </div>
    </div>
  )
}

export default ClothesLineItem;