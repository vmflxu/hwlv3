import React, { useContext, useState } from 'react'
import { DropdownUl, DropdownMenu } from '../styleStore';
import { FourthContext } from '../FourthContext';

function DropdownList({ number }) {

    const menuTable = useContext(FourthContext).menuTable;
    const data = useContext(FourthContext).target;
    const setData = useContext(FourthContext).setTarget;

    const changeState = (elem) => {
        const temp = [...data];
        temp[number].value = elem;
        temp[number].observer = false;
        setData([...temp]);
    }

    return data[number].observer === true
        ? (
            <DropdownUl>
                {
                    menuTable.map((element) => <DropdownMenu onClick={() => changeState(element)}
                    >{element}
                    </DropdownMenu>)
                }
            </DropdownUl>
        )
        : null;
}

export default DropdownList