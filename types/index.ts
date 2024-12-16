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
  alternativeText?: string
  caption?: string
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
  images?: Images[]
  link: string
}

export type TextChild = {
  text: string
  type: 'text'
}

export type LinkChild = {
  url: string
  type: 'link'
  children: TextChild[]
}

export type HeadingBlock = {
  type: 'heading'
  level: number
  children: (TextChild | LinkChild)[]
}

export type ParagraphBlock = {
  type: 'paragraph'
  children: (TextChild | LinkChild)[]
}

export type Block = HeadingBlock | ParagraphBlock

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
  text: Block[]
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
  text: Block[]
}
