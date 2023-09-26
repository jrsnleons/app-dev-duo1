
export default function HomeLayout({children}) {
  return (
    <div className="flex w-screen h-screen">
      <div>HomeLayout</div>
      <div>
        { children }
      </div>
    </div>
  )
}
