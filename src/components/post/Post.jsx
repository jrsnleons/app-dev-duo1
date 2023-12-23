import { FaRegHeart } from "react-icons/fa6"
import {TbMessageCircle} from 'react-icons/tb';
import { StyledLink } from "../misc";
import {Avatar} from "../misc";

export default function Post({name,content,profPicURL,image=null}) {
    return (
            <div className="pb-6 p-0">
                <div className="flex flex-row w-full">
                    <div className="min-w-fit h-full">
                        <Avatar size={46} src={profPicURL} />
                    </div>
                    <div>
                        <div className="flex flex-col pl-3">
                            <span className="text-md pb-px">
                                <b>{name}</b> 
                            </span>
                        </div>
                        <div className="pl-3">
                            <p className="text-base">{content}</p>
                        </div>
                        {
                            image!==null ? <img className="w-full h-fit rounded-lg mt-2 ml-3" src={image} /> : null 
                        }
                        <div className="flex pl-3 justify items-center pt-3 gap-4 opacity-30">
                            <StyledLink onClick={() => {}}>
                                <FaRegHeart size={20} />    
                            </StyledLink> 
                            <StyledLink onClick={() => {}}>
                                <TbMessageCircle size={22} />    
                            </StyledLink> 
                        </div>
                    </div>
                </div>
            <hr className="h-px mt-6 bg-gray-700 opacity-30 border-0"></hr>
            </div>

    )
}

Post.defaultProps = {
    image: null
}