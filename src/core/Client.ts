export default class Client {
  #id: string
  #nome: string
  #age: number

  constructor(nome: string, age: number, id: string = null) {
    this.#nome = nome
    this.#age = age
    this.#id = id
  }

  static vazio() {
    return new Client("", 0)
  }

  get id() {
    return this.#id
  }

  get nome() {
    return this.#nome
  }

  get age() {
    return this.#age
  }
}
