import {LoginLayout} from "../layouts";
import { StyledSubmitButton, StyledTextInput } from "../components/forms";

export default function LoginView() {
  return (
    <LoginLayout>
      <StyledTextInput type="text" placeholder="Username"/>
      <StyledTextInput type="password" placeholder="Password"/>
      <StyledSubmitButton className="w-full">
        Submit
      </StyledSubmitButton>
    </LoginLayout>
  )
}
