import { Product, Products, typeSize, typeSneakers } from './Products.ts'

export interface TStateApp {
	openMenu: boolean
	modalBasket: boolean
	isLoading: boolean
	modalSneakers: boolean
	modalUser: boolean
}

export interface TStateFilter {
	gender: 'Женский' | 'Мужской'
	price: number[]
	sizes: number
	page: number
	meta: TMeta
}

export interface TStateSneakers {
	sneakersArr: Products
	sneakers: Product
}

export interface TMeta {
	total_items: number
	total_pages: number
	current_page: number
	per_page: number
	remaining_count: number
}
export interface ApiResponse {
	items: Products
	meta: TMeta
}

export interface TFormUser {
	name: string
	email: string
}

export interface FormInputs {
	name: string
	email: string
	phone: string
}

export interface TFormQuestion {
	name: string
	phone: string
}
export interface TStateSelection {
	page: 1 | 2 | 3 | 4
	typeSneakers: typeSneakers[]
	size: typeSize[]
	text: string
	name: string
	email: string
}
