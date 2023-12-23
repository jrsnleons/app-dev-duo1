import { SideBar, SideBarR } from "../components/sidebar";

export default function HomeLayout({children, idx, setIdx, header}) {
  return (
    <div className="flex w-screen h-screen">
      <SideBar/> 
      <div className="pt-12 flex grow flex-col overflow-scroll px-8 lg:px-96">
        { header }
        { children }
      </div>
      <SideBarR idx={idx} setIdx={setIdx}/>
    </div>
  )
}

HomeLayout.defaultProps = {
  header: null
}