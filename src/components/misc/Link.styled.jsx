import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    color: ${({theme})=>theme.textColor};
    text-decoration: none;
    &:hover, &:focus{
        color: ${({theme})=>theme.tertiaryColor};
    };
    &:active{
        color:${({theme})=> theme.accentColor};
    }
`

export default StyledLink;