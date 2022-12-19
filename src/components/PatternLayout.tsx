import Titulo from "./Titulo"

interface LayoutProps {
  titulo: string
  children: any
}

export default function PatternLayout(props: LayoutProps) {
  return (
    <>
      <div className={` flex flex-col w-2/3 bg-white text-gray-800 rounded-md`}>
        <Titulo>{props.titulo}</Titulo>
        <section className='p-6'>{props.children}</section>
      </div>
    </>
  )
}
