import {SideBar} from "../components/";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex w-screen h-screen">
      <SideBar />
      <div>DashboardLayout</div>
      <div>
        { children }
      </div>
    </div>
  )
}
