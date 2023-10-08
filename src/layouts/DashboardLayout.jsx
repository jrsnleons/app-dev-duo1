import {SideBar} from "../components/sidebar";

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
