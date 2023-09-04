import styled from 'styled-components';

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
        padding: 40px 0;
    }
`;

export const Content = styled.div`
    max-width: 1140px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;


    > h1 {
        align-items: center;
        font-size: 36px;
        font-weight: 500;
        padding-top: 24px;

        svg {
            font-size: 20px;
            color: ${({theme}) => theme.COLORS.PINK_TITLE};
        }
    }

    > button:first-child {
        align-self: start;
        display: flex;
        align-items: center;
    }

    > p {
        text-align: justify;
    }

    > div {
        display: flex;
        align-items: center;
        margin-top: 24px;
        margin-bottom: -40px;

        > svg {
            color: ${({theme}) => theme.COLORS.PINK_TITLE};
            margin-right: 8px;
        }

        span {
            font-size: 16px;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.WHITE_TITLE};
            margin-right: 8px;
        }

        img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 1px solid ${({theme}) => theme.COLORS.PHOTO_BORDER};
            margin-right: 8px;
        }          
    }
    
`;


