export interface Child {
  id: number
  name: string
}

export interface Category {
  id: number
  name: string
  children?: Child[]
}

export interface Filter {
  id: number
  name: string
  children: Child[]
}
