import React, { useContext, useState } from 'react'
import { DropdownBtn,DropdownDiv } from '../styleStore'
import { FourthContext } from '../FourthContext';

function Dropdowns({number}) {
  
  const target = useContext(FourthContext).target;
  const setFunc = useContext(FourthContext).setTarget;
  
  const newValue = [...target];
  const toggleObserver = () => {
    newValue[number].observer = !newValue[number].observer;
    setFunc(newValue);
  }
  
  return (
    <DropdownBtn onClick={toggleObserver}>
        <DropdownDiv>{target[number].value}</DropdownDiv>
        <DropdownDiv>▼</DropdownDiv>
    </DropdownBtn>
  );
  
}

export default Dropdowns