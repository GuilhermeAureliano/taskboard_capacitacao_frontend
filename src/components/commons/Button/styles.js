import styled from "styled-components";
import theme from "../../../styles/theme";

export const BaseButton = styled.button`
    width: 100%;
    padding: 1.2rem;
    border: none;
    border-radius: 0.7rem;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.blue[500]};
    font-weight: 700;
    color: ${theme.colors.white};

    &:hover {
        filter: brightness(80%);
    } 
`;