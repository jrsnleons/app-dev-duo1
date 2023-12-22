import {Switcher} from '../navigation';

export default function SideBarR({idx, setIdx, showSwitcher}) {
  return (
    <div className= "sm:w-20 md:w-20 lg:w-1/12 h-screen flex flex-col p-4 pr-4">
      {
        showSwitcher ?
        <div className='absolute bottom-0 right-0'>
          <Switcher idx={idx} setIdx={setIdx} />
        </div>
        :
        null
      }
    </div>
  )
}

SideBarR.defaultProps = {
  idx: 0,
  setIdx: null,
  showSwitcher: true
}