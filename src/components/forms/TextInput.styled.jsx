import styled from "styled-components";

const StyledTextInput = styled.input`
    padding: 0.55em 1em;
    border-radius: 6px;
    color: ${({theme}) => theme.textColor};
    background-color: ${({theme}) => theme.tertiaryColor};
`

export default StyledTextInput;