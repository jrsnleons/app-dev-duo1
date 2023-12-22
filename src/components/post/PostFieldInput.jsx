import { useEffect, useRef, useState } from "react";
import { Avatar } from "../misc";
import StyledTextArea from "./TextArea.styled";

export default function PostFieldInput() {
  const textAreaRef = useRef(null);
  const [val, SetVal] = useState("")
  const handleChange = (e) => {
    SetVal(e.target.value)
  }  

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [val])

  return (
    <div className="pb-5">
        <div className="flex flex-row gap-5">
            <Avatar size={80} src="https://randomuser.me/api/portraits/women/81.jpg" />
            <StyledTextArea placeholder="Write a post here" val={val} onChange={handleChange} rows="1" ref={textAreaRef}/>
        </div>
        <hr className="h-px mt-8 mb-2 bg-gray-700 opacity-30 border-0"></hr>
    </div>
  )
}
