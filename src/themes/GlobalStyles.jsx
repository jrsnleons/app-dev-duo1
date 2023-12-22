import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${({theme}) => theme.textColor};
        background-color: ${({theme}) => theme.backgroundColor};
    }
`

export default GlobalStyle;