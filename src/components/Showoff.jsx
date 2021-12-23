import React from 'react';

export default function (props) {
  return (
    <div id = {props.name} className="section">
      <div className="appear" >
        <p className="text-shadow-pop-bottom"
            >
            {props.content}
        </p>
      </div>
    </div>
  );
}