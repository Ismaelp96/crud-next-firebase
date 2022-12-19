import Head from 'next/head'
import Button from '../components/Botao'
import Formulario from '../components/Form'
import PatternLayout from '../components/PatternLayout'
import Table from '../components/Table'
import useClients from '../hooks/useClients'

export default function Home() {
  const {
    cliente,
    clientes,
    newClient,
    salvarClient,
    deletedClient,
    selectedClient,
    tableVisivel,
    exibirTable,
  } = useClients()

  return (
    <>
      <Head>
        <title>Crud - Firebase</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div
        className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white>      
        `}
      >
        <PatternLayout titulo='Cadastro Simples'>
          {tableVisivel ? (
            <>
              <div className='flex justify-end pr-1'>
                <Button
                  className='bg-gradient-to-r from-green-400 to-green-600'
                  onClick={newClient}
                >
                  Novo Cliente
                </Button>
              </div>
              <Table
                clientes={clientes}
                clientSelected={selectedClient}
                clientDelete={deletedClient}
              />
            </>
          ) : (
            <Formulario
              cliente={cliente}
              clienteMudou={salvarClient}
              cancelado={exibirTable}
            />
          )}
        </PatternLayout>
      </div>
    </>
  )
}