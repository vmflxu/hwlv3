import React, { useState } from 'react'
import { FourthDiv, WrapAbsolute, WrapFixed, WrapForForth, WrapFourth } from '../styleStore'
import Dropdowns from './Dropdowns'
import DropdownList from './DropdownList';
import { FourthContext } from '../FourthContext';

function Fourth() {
    const [target, setTarget] = useState([
        { value: '리액트', observer: false },
        { value: '리액트', observer: false },
    ]);

    const menuTable = ['리액트', '자바', '스프링', '리액트네이티브'];

    return (
        <FourthContext.Provider value={{ target, setTarget, menuTable }} style={'overflow:visible'}>
            <WrapForForth>
                <h2>Select</h2>
                <FourthDiv>
                    <WrapFourth overFlow="visible">
                        <Dropdowns number={0} />
                        <WrapAbsolute>
                            {/* <WrapFixed> */}
                                <DropdownList number={0} />
                            {/* </WrapFixed> */}
                        </WrapAbsolute>
                    </WrapFourth>
                    <WrapFourth overFlow="hidden">
                        <Dropdowns number={1} />
                        <WrapAbsolute>
                            <DropdownList number={1} />
                        </WrapAbsolute>
                    </WrapFourth>
                </FourthDiv>
            </WrapForForth>
        </FourthContext.Provider>
    );
}

export default Fourth