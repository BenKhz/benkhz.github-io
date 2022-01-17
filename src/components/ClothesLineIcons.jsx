import React from "react";

export const BackIcon = ({handlePrev}) => {
  return(
    <svg
        style={{position:'relative', zIndex:'5', flexGrow:'1'}}
        onClick={handlePrev}
        height={'25vh'} width={'25vw'}
        viewBox="0 -3 10 10">
        <path
          d="m 0 3 l 0 3 l 3 0 l -3 0 q 4 -5 7 -1"
          transform="rotate(-30)"
          stroke="#1c8aff7a" strokeWidth="1"
          strokeLinecap="round" fill="none"
          strokeLinejoin="round" />
        </svg>
  )
}

export const ForwardIcon = ({handleNext}) => {
  return(
    <svg
        style={{position:'relative', zIndex:'5', flexGrow:'1'}}
        onClick={handleNext}
        height={'25vh'} width={'25vw'}
        viewBox="-1 2 10 10" >
        <path d="m 10 3 l 0 3 l -3 0 l 3 0 q -4 -5 -7 -1"
          transform="rotate(30)"
          stroke="#1c8aff7a" strokeWidth="1"
          strokeLinecap="round" fill="none"
          strokeLinejoin="round" />
      </svg>
  )
}