import { SignUpLayout } from "../layouts";
import { StyledSubmitButton, StyledTextInput, StyledFileInput } from "../components/forms";

export default function SignUpView() {
  return (
    <SignUpLayout>
      <StyledTextInput type="email" placeholder="Email"/>
      <StyledTextInput type="text" placeholder="Username"/>
      <StyledTextInput type="password" placeholder="Password"/>
      <StyledTextInput type="date" placeholder="Birthdate"/>
      <StyledFileInput type="file"/>
      <StyledSubmitButton className="w-full">
        Signup
      </StyledSubmitButton>
    </SignUpLayout>
  )
}
