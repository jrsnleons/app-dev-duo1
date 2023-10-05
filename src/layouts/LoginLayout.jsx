
export default function LoginLayout({children}) {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex grow">
        { children }
      </div>
    </div>
  )
}
