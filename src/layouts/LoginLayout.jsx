export default function LoginLayout({children}) {
  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="flex flex-col h-screen justify-center">
        <div className="font-medium text-4xl text-center">Login</div>
        <div className="flex flex-col gap-3 items-center">
          { children }
        </div>
      </div>
    </div>
  )
}
