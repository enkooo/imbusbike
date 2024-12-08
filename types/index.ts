export interface Child {
  id: number
  name: string
}

export interface Category {
  id: number
  name: string
  children?: Child[]
}

export interface CategoryResponse {
  id: number
  name: string
  children?: Child[]
}

export interface Filter {
  id: number
  name: string
  children: Child[]
}

export interface Images {
  url: string
}

export interface Attribute {
  id: number
  key: string
  value: string
}

export interface ProductResponse {
  id: number
  documentId: string
  name: string
  category: Category
  price: string
  description: string
  attributes: Attribute[]
  url: string
  images?: Images[]
}

export interface Product {
  id: number
  name: string
  category: string
  price: string
  description: string
  attributes: Attribute[]
  url: string
  oldPrice?: string
  imageUrl: string
  link: string
}

export interface NewsItemResponse {
  id: number
  documentId: string
  title: string
  description: string
  publishedAt: string
  link?: string
  cover: {
    url: string
  }
  images?: Images[]
}

export interface NewsItem {
  id: number
  documentId: string
  title: string
  description: string
  date: string
  link?: string
  imageUrl?: string
  images?: Images[]
}
