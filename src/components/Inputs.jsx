import React, { useState } from 'react'

function Inputs({ inputType, setStates, children }) {

    return (
        <div>
            <label>{children}</label>
            <input type={'text'} onChange={(e) => {
                if(inputType === 'number') {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '');   // 입력값이 숫자가 아니면 공백
                    e.target.value = e.target.value.replace(/,/g, '');          // ,값 공백처리
                    e.target.value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 정규식을 이용해서 3자리 마다 , 추가 
                    setStates(e.target.value);
                } else {
                    setStates(e.target.value);
                }}
            } />
        </div>
    )
}

export default Inputs