import {useTheme} from '../utils/hooks';

export default function HomeView() {
  const {theme} = useTheme();
  console.log(theme);
  return (
    <div style={theme} className="flex w-screen h-screen">HomeView</div>
  )
}

