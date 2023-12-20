import { Post } from '../components/post';
import { HomeLayout } from '../layouts';

export default function HomeView() {
  return (
    <HomeLayout>
      <div className="flex grow justify-center bg-neutral-900 flex-col overflow-scroll" >
        {/* tab bar */}
        <div className='m-20 text-white'>
        </div>
        <div>
        <Post 
          name="Jerson Leones"
          handle="19103036"
          content="Hello world!" 
        />
        <Post 
            name="Ann Macey Hipulan"
            handle="2203020"
            content="Happy birthday to me guyses uwu" 
          />
          <Post 
            name="Ivan Leopoldo"
            handle="19223423"
            content="hala naka pasar ko this sem, lets go boisss!!!" 
          /> 
          <Post 
            name="Callista Tan"
            handle="5683502"
            content="strezz sa buhay hays" 
          /> 
          <Post 
            name="Joel Jayme"
            handle="8234598"
            content="in love with you..." 
          />  
          {/* <Post 
            name="Joshua Rodiriguez"
            handle="9485893"
            content="badminton is my sport, i will crush everyone mwahaha. I will destroy their hopes and dreams and crush their soul that they won't play anymore" 
          />   */}
        </div>
        

      </div>
      
    </HomeLayout>
  )
}

