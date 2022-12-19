import { useState } from 'react'
import Entrada from './Entrada'
import Client from '../core/Client'
import Button from './Botao'

interface FormularioProps {
  cliente: Client
  clienteMudou?: (cliente: Client) => void
  cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [age, setAge] = useState(props.cliente?.age ?? 0)

  return (
    <>
      {id ? <Entrada somenteLeitura texto='Código' valor={id} /> : false}
      <Entrada texto='Nome' valor={nome} valorMudou={setNome} />
      <Entrada texto='Idade' tipo='number' valor={age} valorMudou={setAge} />
      <div className='flex justify-end'>
        <Button
          className='bg-gradient-to-r from-blue-400 to-blue-600'
          onClick={() => props.clienteMudou?.(new Client(nome, +age, id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button
          className='bg-gradient-to-r from-red-400 to-red-600'
          onClick={props.cancelado}
        >
          Cancelar
        </Button>
      </div>
    </>
  )
}
