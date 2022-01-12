import React, {useState} from "react";

const myWs = new WebSocket('ws://localhost:3000/websocket')
myWs.addEventListener('message', (e) => {
  console.log(e.data)
  var myDiv = document.createElement("div")
  myDiv.innerHTML = e.data
  document.getElementById('socketsMsgs').appendChild(myDiv)
})

export default function () {
  const [text, setText] = useState('');
  const handleSend = () => {
    myWs.send(text)
  }
  return (
    <>
      <input placeholder="Text Here" value={text} onChange={(e) => {setText(e.target.value)}}></input>
      <button onClick={handleSend}> Send WS Message! </button>
      <div id='socketsMsgs'></div>
    </>
  )
}