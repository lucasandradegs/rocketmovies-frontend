import styled from 'styled-components'

export const Container = styled.button`
    background: none;
    color: ${({theme}) => theme.COLORS.PINK_TITLE};

    border: none;
    font-size: 16px;
    font-weight: 400;

    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
`;