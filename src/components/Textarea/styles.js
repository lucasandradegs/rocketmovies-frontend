import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;

    background-color: ${({theme}) => theme.COLORS.SECOND_BACKGROUND};
    color: ${({theme}) => theme.COLORS.WHITE_TITLE};

    border: none;
    resize: none;

    margin-bottom: 40px;
    border-radius: 10px;
    padding: 19px 16px;

    &::placeholder {    
        color: ${({theme}) => theme.COLORS.EXIT};
    }
`; 