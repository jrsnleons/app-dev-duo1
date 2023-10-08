import {StyledLink} from '../components/misc';

export default function LoginLayout({children}) {
  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="flex flex-col h-screen justify-center gap-3">
        <div className="font-medium text-4xl">Login</div>
        <div className="flex flex-col gap-3 items-center">
          { children }
        </div>
        <div className="font-light text-sm justify-center flex">
          <p>No Account? &nbsp;</p>
          <StyledLink to="/signup">Sign up Now!</StyledLink>
        </div>
      </div>
    </div>
  )
}
