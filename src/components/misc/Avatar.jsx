export default function Avatar({src, size}) {
  return (
    <div>
        <img src={src} height={size} width={size} alt="" className="rounded-full border border-gray-700"/>
    </div>
  )
}

Avatar.defaultProps = {
  size: 46
}