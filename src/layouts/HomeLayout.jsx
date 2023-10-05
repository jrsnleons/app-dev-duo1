import { SideBar } from "../components"

export default function HomeLayout({children}) {
  return (
    <div className="flex w-screen h-screen">
      <SideBar>
        <div className="text-white">hello</div>
      </SideBar>
      <div className="flex grow">
        { children }
      </div>
    </div>
  )
}
