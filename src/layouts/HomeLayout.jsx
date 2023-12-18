import { SideBar } from "../components/sidebar";

export default function HomeLayout({children}) {
  return (
    <div className="flex w-screen h-screen">
      <SideBar> 
      </SideBar>
      <div className="flex grow bg-red-700">
        { children }
      </div>
    </div>
  )
}
