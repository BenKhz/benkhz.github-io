import React from 'react';

export default function (props) {
  return (
    <div id = {props.name} className="section">
      <div className="appear" >
        <p className="text-shadow-pop-bottom"
          // onMouseEnter={(e) => {
          //   e.target.style.animation = "none" }}
          // onMouseLeave={(e) => {
          //   e.target.style.animation = null
          // }}
            >
            {props.content}
        </p>
      </div>
    </div>
  );
}
