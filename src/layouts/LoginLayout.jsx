import {Logo} from '../components/misc';

export default function LoginLayout({children}) {
  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="flex flex-col h-screen justify-center">
        <div className='flex flex-row h-fit justify-center item-center gap-4'>
          <Logo fill="#b150c3" size={70}/>
        </div>
        <div className="flex flex-col gap-3 items-center">
          { children }
        </div>
      </div>
    </div>
  )
}
