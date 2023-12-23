import { useEffect, useState, useRef } from "react";
import { Avatar, StyledButton } from "../misc";
import StyledTextArea from "./TextArea.styled";
import {StyledLink} from '../misc';
import { FaImage } from "react-icons/fa6";
import { UserAuth } from '../../utils/contexts';

export default function PostFieldInput() {
    const textAreaRef = useRef(null);
    const {user} = UserAuth();
    const [val, setVal] = useState("");

    const handleChange = (e) => {
       setVal(e.target.value);
    }

    useEffect(() => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [val]);

  return (
    <div>
        <div className="flex flex-row pb-5 gap-5 w-full">
            <Avatar size={80} src={user.photoURL} />
            <div className="flex flex-col gap-2 w-full">
                <StyledTextArea ref={textAreaRef} placeholder="Write a post here" className="text-black bg-transparent w-full p-1 resize-auto resize-none rounded-lg" value={val} onChange={handleChange}/>
                <div className="flex flex-row justify-between">
                    <StyledLink className="opacity-10 flex flex-row items-center gap-2">
                        <FaImage /> 
                        Add Image
                    </StyledLink>
                    <StyledButton>
                        Post
                    </StyledButton>
                </div>
            </div>
        </div>
        <hr className="h-px mt-2 mb-6 bg-gray-700 opacity-30 border-0"></hr>
    </div>
  )
}
