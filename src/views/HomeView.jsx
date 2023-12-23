import { useState } from 'react';
import { Post, PostFieldInput } from '../components/post';
import { HomeLayout } from '../layouts';

export default function HomeView() {
  const [idx, setIdx] = useState(0);
  const items = [
    <HomeLayout key="For You" idx={idx} setIdx={setIdx} header={<PostFieldInput/>}>
        <Post 
          name="Jerson Leones"
          handle="19103036"
          content="Hello world!" 
          profPicURL="https://randomuser.me/api/portraits/women/81.jpg"
        />
    </HomeLayout>,
    <HomeLayout key="Announcements" idx={idx} setIdx={setIdx}>
        <Post 
          name="Ivan Leopoldo"
          handle="19223423"
          content="hala naka pasar ko this sem, lets go boisss!!!" 
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

