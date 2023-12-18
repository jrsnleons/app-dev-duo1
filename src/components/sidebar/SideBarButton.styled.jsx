import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSideBarButton = styled(Link)`
    padding: 0.3rem 0rem;
    color : ${({theme}) =>theme.textColor};
    text-decoration: none;
    &:hover, &:focus{
        color: ${({theme})=>theme.accentColor};
    };
    &:active{
        color:${({theme})=> theme.accentColor};
    }
`

export default StyledSideBarButton;