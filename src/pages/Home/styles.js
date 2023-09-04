import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 123px;

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
