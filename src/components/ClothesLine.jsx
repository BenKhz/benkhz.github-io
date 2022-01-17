import React, {useState} from 'react';
import {BackIcon, ForwardIcon} from './ClothesLineIcons'
import ClothesLineItem from './ClothesLineItem';

// Should accept an array of slides


function Clothesline(props) {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    console.log("Clicked Next")
    if(active + 1 < cards.length) {
      setActive(prev => prev+1)
    } else { setActive(0)}
  }

  const handlePrev = () => {
    console.log("Clicked Prev")
    if(active - 1 >= 0) {
      setActive(prev => prev-1)
    } else { setActive(cards.length-1)}
  }

  const cards = [
    {
      img: 'someURL',
      title: 'Card One',
      text: 'Loerm Ipsum dolor contri va!',
    },
    {
      img: 'someURL',
      title: 'Card Two',
      text: 'Loerm Ipsum dolor contri va!',
    },
    {
      img: 'someURL',
      title: 'Card Three',
      text: 'Loerm Ipsum dolor contri va!',
    },
    {
      img: 'someURL',
      title: 'Card Four',
      text: 'Loerm Ipsum dolor contri va!',
    }

  ]


  return (
    <div style={{display:'flex', justifyContent:'space-between', position:'relative'}} >
      <BackIcon handlePrev={handlePrev} />
      <div style={{flexGrow:"2", display:'flex', justifyContent:'center'}}>
        {cards.map((elem, idx) => <ClothesLineItem key={idx} elem={elem} idx={idx} active={active}/>)}
      </div>
      <ForwardIcon handleNext={handleNext}/>
    </div>
  );
}

export default Clothesline;