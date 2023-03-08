import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    h2{
        font-size: 2em;
        font-weight: bold;
    }
    button{
        margin : 0px 5px;
    }
    input{
        border: 1px solid rgb(51, 51, 51);
        height: 40px;
        width: 200px;
        outline: none;
        border-radius: 8px;
        padding-left: 12px;
        padding-right: 12px;
    }
    div {
        overflow : visible;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`

export default GlobalStyles;