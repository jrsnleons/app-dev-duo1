import { useTheme } from '../utils/hooks'

export default function Dashboard() {
    const {theme} = useTheme();
  return (
    <div style={theme} className="flex w-screen h-screen">Dashboard</div>
  )
}
