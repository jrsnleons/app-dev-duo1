import { Avatar } from "../misc";

export default function PostFieldInput() {
  return (
    <div className="pb-5">
        <div className="flex flex-row gap-5">
            <Avatar size={80} src="https://randomuser.me/api/portraits/women/81.jpg" />
            <textarea placeholder="Write a post here" className="text-black w-full p-1 resize-none"/>
        </div>
        <hr className="h-px mt-8 mb-2 bg-gray-700 opacity-30 border-0"></hr>
    </div>
  )
}
