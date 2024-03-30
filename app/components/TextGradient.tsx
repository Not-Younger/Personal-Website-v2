type TextGradientProps = {
  text: string
  from?: string
  via?: string
  to?: string
}

export default function TextGradient(props: TextGradientProps) {
  const from = props.from || 'from-purple-400'
  const via = props.via || 'via-purple-200'
  const to = props.to || 'to-pink-400'

  return (
    <div className="border-b-2 inline-block pb-0 leading-tight">
      <span
      className={`bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient`}
      >
        {props.text}
      </span>
    </div>
    
  )
}