import { SideBar, SideBarR } from "../components/sidebar";

export default function HomeLayout({children}) {
  return (
    <div className="flex w-screen h-screen">
      <SideBar> 
      </SideBar>
      <div className="flex grow">
        { children }
      </div>
      <SideBarR>
      </SideBarR>
    </div>
  )
}
