import styled from "styled-components";
import backgroundImg from "../../assets/backgroundm.png"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 134px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
        display: flex;
        justify-content: center;
    }


    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.PINK_TITLE};
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > button {
        margin-bottom: 42px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 30%;
`;