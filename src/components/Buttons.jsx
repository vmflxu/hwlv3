import React from 'react'
import styled from 'styled-components';
import { Btn } from '../styleStore';
import { getUiSet } from '../funcs';
// btnSize, btnStyle,

function Buttons({designSet, call, children }) {
    return (
        <Btn designSet={designSet} onClick={call === null ? '' : call }>{children}</Btn>
    );
}

export default Buttons