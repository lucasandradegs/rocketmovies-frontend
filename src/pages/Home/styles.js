import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

`;
export const Content = styled.div`
    overflow-y: scroll;
    padding: 0 123px;

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
    
    > button {
        width: 210px;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-right: 8px;
        }
    }
`;


