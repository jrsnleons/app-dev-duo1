import SideBarButton from "./SideBarButton";
import logo from '../../assets/logo.svg'


export default function SideBar() {
  return (
    <div className="w-1/6 h-screen flex flex-col justify-between p-4 pr-4">
      <div className="p-2 self-start flex w-full justify-end">
        <img src={logo} alt="Logo" className='w-12 h-12  '/>
      </div>

      <div className="text-right flex flex-col justify-center" >
        <SideBarButton>Home</SideBarButton>
        <SideBarButton>Profile</SideBarButton>
        <SideBarButton>Settings</SideBarButton>
      </div>
      <div>
        Copyright area uwu or smthn
      </div>
    </div>
  )
}