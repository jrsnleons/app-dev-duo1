import { useTheme } from '../utils/hooks';

export default function SideBar({buttons}) {
    const {theme} = useTheme();
  return (
    <div style={theme} className="flex w-1/6 h-screen">
      <div>
        {buttons}
      </div>
    </div>
  )
}
