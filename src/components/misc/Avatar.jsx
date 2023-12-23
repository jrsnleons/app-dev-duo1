export default function Avatar({src, size}) {
  return (
    <div>
        <img src={src} height={size} width={size} alt="" className="rounded-full"/>
    </div>
  )
}

Avatar.defaultProps = {
  size: 46
}