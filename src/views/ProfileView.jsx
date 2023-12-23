import { Avatar } from "../components/misc";
import { ProfileLayout } from "../layouts";
import { UserAuth } from "../utils/contexts";
import {useDatabase} from '../utils/hooks';
import { useEffect, useState } from "react";
import { Post } from "../components/post";

export default function ProfileView() {
  const [data, setData] = useState([]);
  const {user} = UserAuth();
  const {getAllDataWhere} = useDatabase();

  useEffect(() => {
    async function fetch_data(){
      const data = await getAllDataWhere('posts', 'chirper_uid', '==', user.uid);
      setData(data);
    }

    fetch_data();
  }, [getAllDataWhere, user]);



  return (
    <ProfileLayout>
      <div className="flex flex-col">
        <div className="flex justify-between items-center gap-5 flex-row">
          <div className="flex flex-col opacity-85">
            <span className="text-2xl font-medium">{user.displayName}</span>
            <span className="text-sm font-thin opacity-20">@{user.uid}</span>
          </div>
          <Avatar src={user.photoURL} size={70} className=""/>
        </div>
        <hr className="h-px mt-6 mb-4 bg-gray-700 opacity-30 border-0"></hr>
        <div className="">
          <span className="font-medium text-2xl pl-2 opacity-80">Chirps</span>
        </div>
        <div className="pt-6 flex grow flex-col overflow-scroll">
          {
            data.map((item) => {
                return (<Post key={item} name={item.displayName} handle={item.chirper_uid} content={item.content} profPicURL={item.photoURL} image={item.image}/>);
            })
          }
        </div>
      </div>
    </ProfileLayout>
  )
}
