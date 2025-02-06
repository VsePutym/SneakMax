import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Products } from '../../Types/Products.ts'

const initialState: Products = []

const basketSlice = createSlice({
	name: 'basketSlice',
	initialState: initialState,
	reducers: {
		setBasket: (state, action) => {
			state.push(action.payload)
		},
		deleteItemBasket: (state, action: PayloadAction<number>) => {
			// Ожидаем индекс для удаления
			return state.filter((_, index) => index !== action.payload) // Удаляем элемент по индексу
		},
		deleteAllBasket: () => {
			return []
		}
	}
})

export default basketSlice.reducer
export const { setBasket, deleteItemBasket, deleteAllBasket } =
	basketSlice.actions
