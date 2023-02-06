import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 800px;

    input {
        height: 50px;
        width: 100%;
        border: none;
        font-size: 25px;
        border-bottom: 2px solid ${props => props.color ? "white" : "grey"};
    }

    input:disabled {
        background-color: lightgrey;
    }

    label {
        font-size: 30px;
        margin-top: 30px;
    }

    h2 {
        font-size: 18px;
        color: red;
    }
`;
