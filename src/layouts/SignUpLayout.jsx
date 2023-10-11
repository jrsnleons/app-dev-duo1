import { StyledLink } from "../components/misc"

export default function SignUpLayout({children}) {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <div className="flex flex-col h-screen justify-center gap-3">
        <div className="font-medium text-4xl">Sign Up</div>
        <div className="flex flex-col gap-3 items-center">
          { children }
        </div>
        <div className="font-light text-sm justify-center flex">
          <p>Have an Account? &nbsp;</p>
          <StyledLink to="/signup">Login now!</StyledLink>
        </div>
      </div>
    </div>
  )
}
