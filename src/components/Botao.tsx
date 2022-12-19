interface ButtonProps {
  cor?: 'green' | 'blue' | 'gray'
  children: any
  onClick?: () => void
  className?: string
}

export default function Button(props: ButtonProps) {
  const cor = props.cor ?? 'gray'
  return (
    <button
      onClick={props.onClick}
      className={`text-white px-4 py-2 rounded-md ml-2 ${props.className}`}
    >
      {props.children}
    </button>
  )
}
