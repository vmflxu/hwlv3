import React from 'react'
import { ContentWrap, SubWrap, Wrap } from '../styleStore';
import Buttons from './Buttons';
import Bell from './Bell';
import { arrFirst } from '../dataForBtn';

function First() {
    return (
        <Wrap>
            <ContentWrap>
                <h2>Button</h2>
                <SubWrap gap={'1px'}>
                    <Buttons designSet={arrFirst[0]} call={()=>alert("버튼을 만들어보세요.")}
                    >Large Primary Button {'>'}</Buttons>
                    <Buttons designSet={arrFirst[1]} call={null}
                    >Medium</Buttons>
                    <Buttons designSet={arrFirst[2]} call={null}
                    >Small</Buttons>
                </SubWrap>
                <SubWrap>
                    <Buttons designSet={arrFirst[3]} call={()=>prompt("어렵나요?")}
                    >Large Negative Button &nbsp;<Bell /></Buttons>
                    <Buttons designSet={arrFirst[4]} call={null}
                    >Medium</Buttons>
                    <Buttons designSet={arrFirst[5]} call={null}
                    >Small</Buttons>
                </SubWrap>
            </ContentWrap>
        </Wrap>
    );
}

export default First;