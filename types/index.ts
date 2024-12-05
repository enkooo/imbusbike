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

export interface ProductResponse {
  id: number
  name: string
  category: {
    name: string
  }
  price: string
  images?: {
    url: string
  }[]
}

export interface Product {
  id: number
  name: string
  category: string
  price: string
  imageUrl: string
}
