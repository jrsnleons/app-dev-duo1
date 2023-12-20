export default function Post(props) {
    const {name, handle, content} = props;
    


    return (
        <div className="mx-10 my-2 p-4  bg-neutral-950 rounded-lg shadow-lg ">
            <div className="pl-0 p-2">
                <p className="text-xs">
                    <b>{name}</b> 
                    <span className="text-slate-400 text-xs"> @{handle}</span>
                </p>
            </div>
            
            <div className="pl-0 p-1">
                <p className="text-base">{content}</p>
            </div>

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