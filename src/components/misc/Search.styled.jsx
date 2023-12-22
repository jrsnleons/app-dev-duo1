import styled from "styled-components";

const StyledSearchBar = styled.input`
    background-color: ${({theme}) => theme.tertiaryColor};
    &::placeholder{
        color: ${({theme})=>theme.buttonColor}
    }
    padding: 0.65rem 1.2rem;
    border-radius: 15px;
`

export default StyledSearchBar;