import { useTheme } from "../utils/hooks"

export default function LoginView() {
  const {theme} = useTheme();
  return (
    <div style={theme} className="flex w-screen h-screen">LoginView</div>
  )
}
