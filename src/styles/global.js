import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.MAIN_BACKGROUND};
        color: ${({theme}) => theme.COLORS.WHITE_TITLE};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    /* width */
    ::-webkit-scrollbar {
    width: 8px;
    height: 96px;
    }

/* Track */
    ::-webkit-scrollbar-track {
    display: none;
    }

/* Handle */
    ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.COLORS.PINK_TITLE};
    border-radius: 8px;
    }

/* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`;