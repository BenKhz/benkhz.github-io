import React, {useState} from 'react';
import {BackIcon, ForwardIcon, Placeholder} from './ClothesLineIcons'
import ClothesLineItem from './ClothesLineItem';

function Clothesline(props) {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    console.log("Clicked Next")
    if(active + 1 < cards.length) {
      setActive(prev => prev+1)
    }
    // else { setActive(0)}
  }

  const handlePrev = () => {
    console.log("Clicked Prev")
    if(active - 1 >= 0) {
      setActive(prev => prev-1)
    }
    // else { setActive(cards.length-1)}
  }

  const cards = [
    {
      img: 'someURL',
      title: 'INDEX 0',
      text: 'Loerm Ipsum dolor contri va!',
      icon: "A Component"
    },
    {
      img: 'someURL',
      title: 'INDEX 1',
      text: 'Loerm Ipsum dolor contri va!',
    },
    {
      img: 'someURL',
      title: 'INDEX 2',
      text: 'Loerm Ipsum dolor contri va!',
    },
    {
      img: 'someURL',
      title: 'INDEX 3',
      text: 'Loerm Ipsum dolor contri va!',
    },
    {
      img: 'someURL',
      title: 'INDEX 4',
      text: 'Loerm Ipsum dolor contri va!',
    }

  ]


  return (
    <div style={{display:'flex', justifyContent:'space-between', position:'relative'}} >
      <BackIcon handlePrev={handlePrev} display={ active === 0 ? false:true}/>
      <div style={{flexGrow:"2", display:'flex', justifyContent:'center'}}>
        {cards.map((elem, idx) => <ClothesLineItem key={idx} elem={elem} idx={idx} active={active}/>)}
      </div>
      <ForwardIcon handleNext={handleNext} display={cards.length-1 === active ? false:true}/>
    </div>
  );
}

export default Clothesline;