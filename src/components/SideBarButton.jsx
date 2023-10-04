import { useTheme } from "../utils/hooks"

export default function SideBarButton() {
    const {theme} = useTheme();
  return (
    <div style={theme} className="flex">SideBarButton</div>
  )
}
