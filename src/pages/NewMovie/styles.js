import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        margin-top: 24px;
        display: flex;
        padding: 16px;
        gap: 24px;
        background-color: ${({theme}) => theme.COLORS.BLACK};
        border-radius: 10px;
    }
`;

export const Form = styled.form`
    max-width: 1140px;
    margin: 40px auto;


    h1 {
        margin-top: 24px;
        margin-bottom: 40px;
    }

    > div {
        display: flex;
        gap: 40px;
        margin-bottom: 40px;
    }

    a {
        display: flex;
        width: 20px;
    }
`;