import {LoginLayout} from "../layouts";
import { StyledPasswordInput, StyledSubmitButton, StyledTextInput } from "../components/forms";

export default function LoginView() {
  return (
    <LoginLayout>
      <StyledTextInput type="text" placeholder="Username" className="w-full"/>
      <StyledPasswordInput />
      <StyledSubmitButton className="w-full">
        Submit
      </StyledSubmitButton>
    </LoginLayout>
  )
}
