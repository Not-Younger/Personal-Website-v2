type TextGradientProps = {
  text: string
  from?: string
  via?: string
  to?: string
}

export default function TextGradient(props: TextGradientProps) {
  const from = props.from || 'from-purple-600'
  const via = props.via || 'via-purple-400'
  const to = props.to || 'to-pink-400'

  return (
    <span
      className={`bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient`}
    >
      {props.text}
    </span>
  )
}