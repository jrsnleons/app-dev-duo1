import { Post } from '../components/post';
import { HomeLayout } from '../layouts';

export default function HomeView() {
  return (
    <HomeLayout>
      <div className="flex grow flex-col overflow-scroll" >
        <Post 
          name="Jerson Leones"
          handle="19103036"
          content="Hello world!" 
          profPicURL="https://randomuser.me/api/portraits/women/81.jpg"
        />
        <Post 
            name="Ann Macey Hipulan"
            handle="2203020"
            content="Happy birthday to me guyses uwu" 
          profPicURL="https://randomuser.me/api/portraits/women/81.jpg"
          />
          <Post 
            name="Ivan Leopoldo"
            handle="19223423"
            content="hala naka pasar ko this sem, lets go boisss!!!" 
          profPicURL="https://randomuser.me/api/portraits/women/81.jpg"
          /> 
          <Post 
            name="Callista Tan"
            handle="5683502"
            content="strezz sa buhay hays" 
          profPicURL="https://randomuser.me/api/portraits/women/81.jpg"
          /> 
          <Post 
            name="Joel Jayme"
            handle="8234598"
            content="in love with you..." 
          profPicURL="https://randomuser.me/api/portraits/women/81.jpg"
          />  
          <Post 
            name="Joel Jayme"
            handle="8234598"
            content="in love with you..." 
          profPicURL="https://randomuser.me/api/portraits/women/81.jpg"
          />  
          <Post 
            name="Joel Jayme"
            handle="8234598"
            content="in love with you..." 
          profPicURL="https://randomuser.me/api/portraits/women/81.jpg"
          />  
      </div>
    </HomeLayout>
  )
}

