import styled from 'styled-components'
import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100%;

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


