import styled from "styled-components";

const StyledTextArea = styled.textarea`
    color: ${({theme})=> theme.textColor};
    width: 100%;
    padding: 0.25rem;
    resize: none;
    border-radius: 0.25rem;
    background-color: ${({theme})=> theme.backgroundColor};
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: ${({theme})=> theme.buttonColor};
    }
`

export default StyledTextArea;