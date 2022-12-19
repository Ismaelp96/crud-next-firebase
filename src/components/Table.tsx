import Client from "../core/Client"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TableProps {
  clientes: Client[]
  clientSelected?: (cliente: Client) => void
  clientDelete?: (cliente: Client) => void
}

export default function Table(props: TableProps) {
  const showAction = props.clientDelete || props.clientSelected
  function renderHeader() {
    return (
      <tr>
        <th className='text-left p-4'>Código</th>
        <th className='text-left p-4'>Nome</th>
        <th className='text-left p-4'>Idade</th>
        {showAction ? <th className='p-4'>Ações</th> : false}
      </tr>
    )
  }

  function renderData() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className='text-left p-4'>{cliente.id}</td>
          <td className='text-left p-4'>{cliente.nome}</td>
          <td className='text-left p-4'>{cliente.age}</td>
          {showAction ? renderAction(cliente) : false}
        </tr>
      )
    })
  }

  function renderAction(cliente: Client) {
    return (
      <td className='flex justify-center'>
        {props.clientSelected ? (
          <button
            onClick={() => props.clientSelected?.(cliente)}
            className={`flex justify-center 
            items-center text-green-600 
            rounded-full p-2 m-1
           hover:bg-purple-50`}
          >
            {IconeEdicao}
          </button>
        ) : (
          false
        )}
        {props.clientDelete ? (
          <button
            onClick={() => props.clientDelete?.(cliente)}
            className={`flex justify-center 
            items-center text-red-500 
            rounded-full p-2 m-1
            hover:bg-purple-50`}
          >
            {IconeLixo}
          </button>
        ) : (
          false
        )}
      </td>
    )
  }

  return (
    <table className='w-full rounded-xl overflow-hidden mt-4'>
      <thead className='bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100'>
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  )
}
