import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, $isnew}) => $isnew ? "transparent" : theme.COLORS.SECOND_BACKGROUND};
    color: ${({theme}) => theme.COLORS.SECOND_BACKGROUND};

    border: ${({theme, $isnew}) => $isnew ? `2px dashed ${theme.COLORS.EXIT}` : "none"};

    /* margin-bottom: 8px; */
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({theme}) => theme.COLORS.PINK_TITLE};
    }

    .button-add {
        color: ${({theme}) => theme.COLORS.PINK_TITLE};
    }

    > input {
        height: 56px;
        width: 100%;
        max-width: 225px;

        padding: 16px;
        color: ${({theme}) => theme.COLORS.WHITE_TITLE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.EXIT};
        }     
    }

`;