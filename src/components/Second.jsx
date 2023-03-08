import React from 'react'
import { SubWrap, Wrap } from '../styleStore'
import Buttons from './Buttons'
import Inputs from './Inputs'
import { useState } from 'react'
import { alertData } from '../funcs'
import { arrSecond } from '../dataForBtn'

function Second() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    return (
        <Wrap>
            <h2>Input</h2>
            <SubWrap gap={'30px'}>
                <Inputs inputType={'text'} setStates={setName}>이름</Inputs>
                <Inputs inputType={'number'} setStates={setPrice}>가격</Inputs>
                <Buttons
                    designSet={arrSecond[0]}
                    call={() => alertData(name, price)}
                >저장</Buttons>
            </SubWrap>
        </Wrap>
    )
}

export default Second