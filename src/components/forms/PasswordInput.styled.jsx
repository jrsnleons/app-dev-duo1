import { useState } from 'react';
import StyledTextInput from './TextInput.styled';
import styled from 'styled-components';
import { PiEyeSlashFill } from 'react-icons/pi';
import { IoEyeSharp } from 'react-icons/io5';

const StyledShowPasswordButton = styled.button`
    font-size: 1em;
    background-color: ${({theme})=> theme.tertiaryColor};
    padding: 0.55em;
    border-radius: 6px;
`

export default function StyledPasswordInput() {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const togglePassword = () => {
        setIsPasswordShown(!isPasswordShown);
    }
  return (
    <div className="flex flex-row gap-3">
       <StyledTextInput type={isPasswordShown ? "text" : "password"} placeholder='Password'/>
       <StyledShowPasswordButton onClick={togglePassword}>
        {
            isPasswordShown ? 
                    <IoEyeSharp/>
                    :
                    <PiEyeSlashFill/>
        }
       </StyledShowPasswordButton>
    </div>
  )
}
