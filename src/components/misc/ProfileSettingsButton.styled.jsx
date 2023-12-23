import styled from "styled-components";

const StyledEditProfileButton = styled.button`
    border-radius: 7px;
    padding: 0.55em 2em;
    width: 100%;
    border: 2px solid ${({theme})=> theme.buttonColor};
`

export default StyledEditProfileButton;