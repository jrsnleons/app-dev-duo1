export default function Avatar({src, size}) {
  return (
        <img src={src} height={size} width={size} alt="" className="rounded-full"/>
  )
}

Avatar.defaultProps = {
  size: 46
}