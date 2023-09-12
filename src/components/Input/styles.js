import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.SECOND_BACKGROUND};
    color: ${({theme}) => theme.COLORS.EXIT};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 18px 16px;

        color: ${({theme}) => theme.COLORS.WHITE_TITLE};
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.EXIT};
        }
    }
        svg {
            margin-left: 12px;
        }
`;