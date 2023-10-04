import { useTheme } from "../utils/hooks";

export default function LoginLayout({children}) {
  const {theme} = useTheme();
  return (
    <div style={theme} className="flex w-screen h-screen">
      <div className="flex grow">
        { children }
      </div>
    </div>
  )
}
