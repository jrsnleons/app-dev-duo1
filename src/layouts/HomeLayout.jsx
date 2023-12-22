import { SideBar, SideBarR } from "../components/sidebar";
import { PostFieldInput } from "../components/post";

export default function HomeLayout({children, idx, setIdx}) {
  return (
    <div className="flex w-screen h-screen">
      <SideBar/> 
      <div className="pt-12 flex grow flex-col overflow-scroll px-8 lg:px-96">
       <PostFieldInput /> 
        { children }
      </div>
      <SideBarR idx={idx} setIdx={setIdx}/>
    </div>
  )
}
