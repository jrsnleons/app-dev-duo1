import { SideBar, SideBarR } from "../components/sidebar";

export default function HomeLayout({children}) {
  return (
    <div className="flex w-screen h-screen">
      <SideBar/> 
      <div className="flex grow justify-center">
        { children }
      </div>
      <SideBarR/>
    </div>
  )
}
