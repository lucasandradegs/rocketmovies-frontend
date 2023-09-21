import styled from 'styled-components'
import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100%;

    input {
        height: 56px;
        width: 850px;
        padding: 18px 16px;

        color: ${({ theme }) => theme.COLORS.WHITE_TITLE};
        background-color: ${({theme}) => theme.COLORS.SECOND_BACKGROUND};
        /* background: transparent; */
        border: 0;
        border-radius: 10px;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.EXIT};
        }
        
        @media (max-width: 1600px) {
        width: 700px;
        }
        @media (max-width: 1300px) {
        width: 450px;
        }
        @media (max-width: 1050px) {
        width: 250px;
        }
        @media (max-width: 850px) {
        width: 130px;
        }
    }

`;


export const Content = styled.div`
    overflow-y: scroll;
    padding: 0 123px;
    height: calc(100vh - 217px);
`;

export const NewMovie = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 123px;
    margin-bottom: 40px;



    > h2 {
        font-size: 32px;
        font-weight: 400;
    }
    
    > a {
        width: 210px;

        display: flex;
        align-items: center;

        svg {
            margin-right: 8px;
        }
    }

`;


