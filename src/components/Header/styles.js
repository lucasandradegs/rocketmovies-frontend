import styled from 'styled-components'
import { Link } from "react-router-dom"

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.HEADER};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 123px;

`;

export const Left = styled.div`
    > span {
        font-size: 24px;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.PINK_TITLE};
    }
`;

export const Middle = styled.div`
    margin-top: 12px;
    width: 60%;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.COLORS.PHOTO_BORDER};
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 9px;
        line-height: 24px;

        span {
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
            display: flex;
            justify-content: flex-end;
        }

        strong {
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE_TITLE};
        }
    }
`;