import styled from 'styled-components'

export const Container = styled.span`
    color: ${({theme}) => theme.COLORS.PINK_TITLE};
    display: flex;
    gap: 6px;
    margin-top: 8px;
    font-size: ${({details}) => details ? "20px" : "12px"}
`;