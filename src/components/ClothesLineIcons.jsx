import React from "react";

export const BackIcon = ({handlePrev, display}) => {
  return(
    <svg
        style={
          {position:'relative',
          zIndex:'5',
          flexGrow:'1',
          opacity: display?'1':'0',
          transition:'all 700ms',
          filter: display? '':'blur(0.1rem)'}}
        onClick={handlePrev}
        height={'25vh'} width={'25vw'}
        viewBox="-5 -3 10 10">
        <path
          d ="m 0 3 l 0 2 l 2 0 l -2 0 l 1 -1 Q 2 3 3 3"
          stroke="#1c8aff7a" strokeWidth="0.6"
          strokeLinecap="round" fill="none"
          strokeLinejoin="round" />
        </svg>
  )
}

export const ForwardIcon = ({handleNext, display}) => {
  return(
    <svg
        style={
          {position:'relative',
          zIndex:'5',
          flexGrow:'1',
          opacity: display?'1':'0',
          transition:'all 700ms',
          filter: display? '':'blur(0.1rem)'}}
        onClick={handleNext}
        height={'25vh'} width={'25vw'}
        viewBox="-5 -3 10 10" >
        <path d="m 0 3 l 0 2 l -2 0 l 2 0 l -1 -1 Q -2 3 -3 3"
          transform="rotate(0)"
          stroke="#1c8aff7a" strokeWidth="0.6"
          strokeLinecap="round" fill="none"
          strokeLinejoin="round" />
      </svg>
  )
}