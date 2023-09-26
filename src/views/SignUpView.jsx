import { useTheme } from "../utils/hooks"

export default function SignUpView() {
  const {theme} = useTheme();
  return (
    <div style={theme} className="flex w-screen h-screen">SignUpView</div>
  )
}
