import { TbArrowsLeftRight } from "react-icons/tb";

export default function Switcher({idx, setIdx}) {
    const items = [
        "For You",
        "Announcements",
        "Pages"
    ]

    const handleButtonClick = () => {
        setIdx(idx + 1);
    }

  return (
    <button onClick={handleButtonClick} className="m-8 flex flex-row items-center justify-center gap-2 bg-neutral-800 px-4 py-2 rounded-full">
        <span className="opacity-50 font-thin">
            {
                items[idx % items.length]
            }
        </span>
        <TbArrowsLeftRight size={20} className="opacity-10" />
    </button>
  )
}
