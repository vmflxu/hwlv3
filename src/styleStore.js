import styled from "styled-components";


export const ModalRoot = styled.div`
    display : flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height : 100vh;
    top : 0px;
    left : 0px;
    background-color: rgba(221, 221, 221, 0.8);
    z-index: 5;
`
export const ModalWhiteBox = styled.div`
    display: block;
    position: absolute;
    border-radius: 12px;
    background-color: white;
    width: ${(props) => props.modalType === 'first' ? '452px' : '252px'};
    height: ${(props) => props.modalType === 'first' ? '252px' : '152px'};
    padding:24px;
`

export const ModalContents = styled.div`
    display: block;
    margin-bottom : auto;
`
export const ModalButtonSpace = styled.div`
    display: block;
    position: absolute;
    bottom : ${(props) => props.btnPosition == 'top' ? 'auto' : '10px'};
    right : 10px;
    top : ${(props) => props.btnPosition == 'top' ? '10px' : 'auto'};
`

export const Wrap = styled.div`
    margin : 20px 10px;
`;
export const ContentWrap = styled.div`
    margin : 20px 0px;
`
export const SubWrap = styled.div`
    display: flex;
    vertical-align: top;
    gap: ${(props) => props.gap};
    margin : 20px 0px;
`

export const WrapForForth = styled.div`
    margin : 20px 10px;
    padding : 20px 0px 0px 0px;
    border : 3px solid lightgrey;
    height : fit-content;
    overflow: visible;
`
export const DropdownBtn = styled.button`
    display : flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    background-color: white;
    width:300px;
    min-height:40px;
    border : 1px solid rgb(221, 221, 221);
    border-radius: 12px;
    padding : 0px 28px;
`
export const DropdownDiv = styled.div`
    margin : 0px;
    padding : 8px;
`
export const DropdownUl = styled.ul`
    border : 1px solid rgb(221, 221, 221);
    border-radius : 12px;
    width: fit-content;
    height : fit-content;
    background-color: transparent;
    overflow: hidden;
`
export const DropdownMenu = styled.li`
    display: flex;
    align-items: center;
    width:240px;
    height:40px;
    /* max-height: 40px; */
    /* min-height: 20px; */
    padding: 0px 28px;
    background-color: white;
    font-size : small;
    /* border-radius : inherit; */
    
    cursor: pointer;
    &:hover {
        background-color: rgb(221, 221, 221);
    }
`

export const FourthDiv = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: row;
    margin: 20px 0px 0px 0px;
    height:120px;
    gap: 10px;
    background-color: white;
    overflow: visible;
`
export const Btn = styled.button`
    cursor: pointer;
    color : ${(props) => props.designSet.fontColor};
    padding : 6px 1px;
    height : ${(props) => props.designSet.height};
    width : ${(props) => props.designSet.width};
    border-radius: ${(props) => props.designSet.borderRadius};
    background-color: ${(props) => props.designSet.backgroundColor};
    border : ${(props) => props.designSet.border};
    font-weight: ${(props) => props.designSet.fontWeight};
    &:active{
        filter: brightness(0.5);
    }
`

export const WrapFourth = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    width: 300px;
    height: ${({overFlow}) => overFlow === 'hidden' ? '' : 'fit-content'};
    gap:5px;
    border:none;
    background-color: white;
    overflow: ${({overFlow}) => overFlow};
`

export const WrapAbsolute = styled.div`
    overflow: visible;
    z-index: 5;
`
export const WrapFixed = styled.div`
    /* position: fixed; */
    /* transform: translateY(100%); */
`