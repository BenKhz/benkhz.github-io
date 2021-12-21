import React from 'react';

export default function (props) {
  return (
    <div id = {props.name} className="section text-shadow-drop-left">
      <p className="appear">{props.content}</p>
    </div>
  );
}