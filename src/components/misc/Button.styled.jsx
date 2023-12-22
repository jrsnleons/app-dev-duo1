import styled from "styled-components";

const StyledButton = styled.button`
    padding: 0.55em 2em;
    font-size: 1em;
    background-color: ${({theme}) => theme.tertiaryColor};
    border-radius: 21px;
    color: #fff;
`

export default StyledButton;