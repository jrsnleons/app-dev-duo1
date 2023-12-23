import styled from "styled-components";

const StyledImageInput = styled.input`
    color: ${({theme})=>theme.textColor};
    text-decoration: none;
    &:hover, &:focus{
        color: ${({theme})=>theme.tertiaryColor};
    };
    &:active{
        color:${({theme})=> theme.accentColor};
    }
`

export default StyledImageInput;