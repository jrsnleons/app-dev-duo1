import { SideBar, SideBarR } from "../components/sidebar";

export default function ProfileLayout({children}) {
  return (
    <div className="flex w-screen h-screen">
      <SideBar/> 
      <div className="pt-24 flex grow flex-col overflow-scroll px-24 lg:px-96">
        { children }
      </div>
      <SideBarR showSwitcher={false}/>
    </div>
  )
}