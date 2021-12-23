import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    width: 100vw;
    min-width: 300px;
    min-height: 100vh; 
    padding: 2.8rem;
    gap: 0.3rem;
    display: grid;  
    grid-template-columns: 60% 40%;
    align-items: center;
    justify-content: center;

    @media (max-width: 1280px) {
        grid-template-columns: 36% 64%;
    }

    @media (max-width: 1080px) {
        grid-template-columns: 46% 54%;
    }
    
    @media (max-width: 980px) {
        grid-template-columns: 64% 36%;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

export const SignUpSection = styled.section`
    height: 100%;
    padding: 7.2rem;

    gap: 2rem;

    @media (max-width: 1280px) {
        padding-right: 5.4rem;
        padding-left: 5.4rem;
    }

    @media (max-width: 880px) {
        padding-right: 4.8rem;
        padding-left: 4.8rem;
    }

    @media (max-width: 800px) {
        border-radius: 3.2rem;
    }

    @media (max-width: 430px) {
        padding-left: 3.2rem;
        padding-right: 3.2rem;
        gap: 1.8rem;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 0 3.2rem 3.2rem 0;
    background-color: ${theme.colors.white};
`;

export const InputsName = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    gap: 1.8rem;

    input {
        width: 100%;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

export const InputsPassword = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    gap: 1.8rem;

    input {
        width: 100%;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h1`
    color: ${theme.colors.blue[700]};
`;

export const Greetings = styled.p`
    color: ${theme.colors.blue[400]};
    margin-bottom: 2rem;
`;

export const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    span {
        color: ${theme.colors.blue[400]};
    }

    a {
        color: ${theme.colors.blue[500]};
        text-decoration: none;
        font-weight: 700;
        margin-left: 0.3rem;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const DecorativeSection = styled.section`
    height: 100%;
    border-radius: 3.2rem 0 0 3.2rem;
    position: relative;

    @media (max-width: 800px) {
        border-radius: 3.2rem;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.colors.blue[500]}

`;
