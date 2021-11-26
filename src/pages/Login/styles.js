import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
    width: 100vw;
    padding: 2.8rem;
    
    display: grid;
    grid-template-columns: 34% 66%;
    align-items: center;
    justify-content: center;
`;

export const LoginSection = styled.section`
    height: 100%;
    padding: 7.2rem;
    border-radius: 3.2rem 0 0 3.2rem;
    background-color: ${theme.colors.white};

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

`;

export const Title = styled.h1`
    font-size: 3.6rem;
    color: ${theme.colors.blue[700]};
`;

export const Greetings = styled.p`
    font-size: 1.8rem;
    color: ${theme.colors.blue[400]};
    margin-bottom: 4.8rem;
`;


export const DecorativeSection = styled.section`
    background-color: ${theme.colors.blue[500]}
`


