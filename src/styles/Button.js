import styled from "styled-components";

export const Button = styled.button`
    width: ${props => props.size === "normal" ? "300px" : "100%"};
    height: 70px;
    border: none;
    outline: none;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 25px;
    cursor: pointer;
    border: 1px solid #000000;
    margin-bottom: 5px;

    :hover {
        background-color: #FAE057;
        color: #000000;
        border: none;
    }

    :disabled {
        pointer-events: none;
        opacity: 0.5;
    }

    :active {
        background-color: #000000;
        color: #FFFFFF;
    }
`;
