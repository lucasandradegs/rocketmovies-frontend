import styled from 'styled-components'

export const Container = styled.section`
    margin: 40px 0;

    > h2 {
        border-bottom-color: ${({theme}) => theme.COLORS.EXIT};

        padding-bottom: 16px;
        margin-bottom: 24px;

        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
    }
`;