import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html,
    body {
    width: 100%;
    height: 100%;
    color: #9E9DA5;
    font-family: 'Poppins', sans-serif;
    }

    #root {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    }

    input,
    input:focus,
    input:active {
    outline: none;
    border: none;
    }

    a {
    text-decoration: none;
    color: #9E9DA5;
    cursor: pointer;
    }

    li {
    list-style: none;
    }

    button,
    button:focus,
    button:active {
    outline: none;
    border: none;
    cursor: pointer;
    }
    
    /* ::-webkit-scrollbar{
        display: none;
    } */

`;

export default GlobalStyle;
