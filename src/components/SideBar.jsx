import { useTheme } from '../utils/hooks';

export default function SideBar() {
    const {theme} = useTheme();
  return (
    <div style={theme} className="flex w-screen">SideBar</div>
  )
}
