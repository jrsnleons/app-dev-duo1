import styled from "styled-components";

const StyledTextInput = styled.input`
    padding: 0.25em 1em;
    border-radius: 3px;
    color: ${({theme}) => theme.backgroundColor};
    background-color: ${({theme}) => theme.textColor};
`

export default StyledTextInput;