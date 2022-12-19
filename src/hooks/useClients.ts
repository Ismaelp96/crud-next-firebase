import { useEffect, useState } from 'react'
import ColecaoCliente from '../backend/db/colecaoCliente'
import Client from '../core/Client'
import ClienteRepositorio from '../core/ClienteRepositorio'
import useTableOuForm from './useTabelaOuform'

export default function useClients() {
  const repo: ClienteRepositorio = new ColecaoCliente()

  const { tableVisivel, exibirForm, exibirTable } = useTableOuForm()

  const [cliente, setCliente] = useState<Client>(Client.vazio())

  const [clientes, setClientes] = useState<Client[]>([])

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes)
      exibirTable()
    })
  }

  function selectedClient(cliente: Client) {
    setCliente(cliente)
    exibirForm()
  }
  async function deletedClient(cliente: Client) {
    await repo.excluir(cliente)
    obterTodos()
  }
  function newClient() {
    setCliente(Client.vazio())
    exibirForm()
  }
  async function salvarClient(cliente: Client) {
    await repo.salvar(cliente)
    obterTodos()
  }
  return {
    cliente,
    clientes,
    newClient,
    salvarClient,
    deletedClient,
    selectedClient,
    obterTodos,
    tableVisivel,
    exibirTable,
  }
}
