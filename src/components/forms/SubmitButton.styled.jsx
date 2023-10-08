import styled from "styled-components"

const StyledSubmitButton = styled.button`
    padding: 0.25em 1em;
    font-size: 1em;
    background-color: ${({theme}) => theme.accentColor};
    border-radius: 3px;
    color: ${({theme}) => theme.textColor};
`

export default StyledSubmitButton;
