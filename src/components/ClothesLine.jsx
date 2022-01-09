import React from 'react';
import ClothesLineItem from './ClothesLineItem';

function Clothesline(props) {

  const cards = props.projects.map(project => <ClothesLineItem text={project.shortText} />)
  return (
    <div className="clContainer" >
      <svg
        style={{ position: 'relative', top: '0%', left: '0%' }}
        onClick={()=>{console.log("Clicked Back Arrow")}}
        height={'25vh'} width={'25vw'}
        viewBox="0 -3 10 10">
        <path
          d="m 0 3 l 0 3 l 3 0 l -3 0 q 4 -5 7 -1"
          transform="rotate(-30)"
          stroke="#1c8aff7a" strokeWidth="1"
          strokeLinecap="round" fill="none"
          strokeLinejoin="round" />
      </svg>
      <div style={{postion:'relative'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
      {cards}
      </div>
      </div>
      <svg
        style={{ position: 'relative', top: '0', right: '0'}}
        onClick={()=>{console.log("Clicked Forward Arrow")}}
        height={'25vh'} width={'25vw'}
        viewBox="0 2 10 10" >
        <path d="m 10 3 l 0 3 l -3 0 l 3 0 q -4 -5 -7 -1"
          transform="rotate(30)"
          stroke="#1c8aff7a" strokeWidth="1"
          strokeLinecap="round" fill="none"
          strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default Clothesline;