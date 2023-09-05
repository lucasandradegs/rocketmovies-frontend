import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.HOME};

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    > h2 {
        color: ${({theme}) => theme.COLORS.PINK_TITLE};
        display: flex;
        gap: 6px;
        margin-top: 8px;
        font-size: 12px;
    }

    > p {
        margin-top: 15px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        text-align: justify;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow-y: hidden;
        -webkit-box-orient: vertical; 
    }

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE_TITLE};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 15px;
    }
`;
