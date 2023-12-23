import { useEffect, useState } from 'react';
import { Post, PostFieldInput } from '../components/post';
import { HomeLayout } from '../layouts';
import {useDatabase} from '../utils/hooks';

export default function HomeView() {
  const [idx, setIdx] = useState(0);
  const [data, setData] = useState([]);
  const {getAllData} = useDatabase();

  useEffect(() => {
    async function fetch_data(){
      const data = await getAllData('posts');
      setData(data);
    }

    fetch_data();
  },[data, getAllData])

  const items = [
    <HomeLayout key="For You" idx={idx} setIdx={setIdx} header={<PostFieldInput/>}>
      {
        data.map((item) => {
            return (<Post key={item} name={item.displayName} handle={item.chirper_uid} content={item.content} profPicURL={item.photoURL} image={item.image}/>);
        })
      }
    </HomeLayout>,
    <HomeLayout key="Announcements" idx={idx} setIdx={setIdx}>
        <Post 
          name="President"
          handle="theoneandonly"
          content="Merry Christmas Everyone! It's officially the end of the school year and I would like to applaud every student, teachers, and staff for a great semester. Let's keep it up! Happy Holidays and see you soon!" 
        profPicURL="https://randomuser.me/api/portraits/women/81.jpg"
        />        
        <Post 
          name="President"
          handle="theoneandonly"
          content="No Classes Today!" 
        profPicURL="https://randomuser.me/api/portraits/women/81.jpg"
        />        
        <Post 
          name="President"
          handle="theoneandonly"
          content="Vehicle Sticker Applications are now closed!" 
        profPicURL="https://randomuser.me/api/portraits/women/81.jpg"
        />        
    </HomeLayout>,
    <HomeLayout key="Pages" idx={idx} setIdx={setIdx}>
        <Post 
          name="Ivan Leopoldo"
          handle="19223423"
          content="hala naka pasar ko this sem, lets go boisss!!!" 
        profPicURL="https://randomuser.me/api/portraits/women/81.jpg"
        /> 
        <Post 
          name="Joel Jayme"
          handle="8234598"
          content="in love with you..." 
        profPicURL="https://randomuser.me/api/portraits/women/81.jpg"
        image="https://media2.giphy.com/media/vgPptRu3quuHYFQ1GH/giphy.gif"
        />  
    </HomeLayout>
  ]

  return (
    <>
      {
        items[idx % items.length]
      }
    </>
  )
}

