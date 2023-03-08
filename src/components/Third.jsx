import React, { useRef, useState } from 'react'
import { ModalButtonSpace, ModalContents, ModalRoot, ModalWhiteBox, SubWrap, Wrap } from '../styleStore'
import Buttons from './Buttons'
import { arrThird } from '../dataForBtn';
import Modals from './Modals';
import { toggleModal } from '../funcs';

function Third() {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);

    return (
        <Wrap>
            <h2>Modal</h2>
            <SubWrap>
                <Buttons designSet={arrThird[0]} call={() => setFirst((prev) => !prev)}>open modal</Buttons>
                <Buttons designSet={arrThird[1]} call={() => setSecond((prev) => !prev)}>open modal</Buttons>
            </SubWrap>
            <SubWrap>
                <Modals observer={first}>
                    <ModalRoot>
                        <ModalWhiteBox modalType={'first'}>
                            <ModalContents>첫번째 모달창</ModalContents>
                            <ModalButtonSpace btnPosition={'bottom'}>
                                <Buttons designSet={arrThird[2]} call={() => toggleModal(setFirst)}>닫기</Buttons>
                                <Buttons designSet={arrThird[3]} call={null}>확인</Buttons>
                            </ModalButtonSpace>
                        </ModalWhiteBox>
                    </ModalRoot>
                </Modals>
                <Modals observer={second}>
                    <ModalRoot onClick={() => toggleModal(setSecond)}>
                        <ModalWhiteBox modalType={'second'} onClick={(e) => e.stopPropagation()}>
                            <ModalContents>두번째 모달창</ModalContents>
                            <ModalButtonSpace btnPosition={'top'}>
                                <Buttons designSet={arrThird[4]} call={() => toggleModal(setSecond)}>X</Buttons>
                            </ModalButtonSpace>
                        </ModalWhiteBox>
                    </ModalRoot>
                </Modals>
            </SubWrap>
        </Wrap>
    )
}

export default Third;