export default function Post({name,handle,content,profPicURL}) {
    return (
        <div className="mx-10 my-2 p-4 bg-neutral-950 rounded-lg shadow-lg ">
            <div className="pl-0 p-2">
                <div className="flex flex-row">
                    <div className="rounded-full">
                        <img src={profPicURL} alt="" className="rounded-full border border-gray-700 w-12"/>
                    </div>
                    <div className="flex text-xs flex-col pl-3 justify-center">
                        <b>{name}</b> 
                        <span className="text-slate-400 text-xs"> @{handle}</span>
                    </div>
                </div>
            </div>
            <div className="pl-0 pt-2">
                <p className="text-base">{content}</p>
            </div>

            <hr className="h-px mt-3 bg-gray-700 opacity-30 border-0"></hr>
            <div className="flex justify ">
                <button className="bg-twitter text-xs text-slate-500 rounded-full py-2 px-4 hover:text-violet-600">
                    Reply
                </button>
                <button className="bg-twitter text-xs text-slate-500 rounded-full py-2 px-4 hover:text-violet-600">
                    Like
                </button>
            </div>
        
        </div>
    )
}