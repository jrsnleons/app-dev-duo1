import { SideBar, SideBarR } from "../components/sidebar";

export default function NotificationsLayout({children}) {
  return (
    <div className="flex w-screen h-screen">
      <SideBar/> 
      <div className="pt-12 flex grow flex-col overflow-scroll px-8 lg:px-96">
        { children }
      </div>
      <SideBarR showSwitcher={false}/>
    </div>
  )
}
