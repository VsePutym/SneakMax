import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { typeSneakers } from '../../Types/Products.ts'
import { TStateSelection } from '../../Types/sneakMax.ts'

const initialState: TStateSelection = {
	page: 1,
	typeSneakers: [],
	size: [],
	text: '',
	name: '',
	email: ''
}

const selectionSlice = createSlice({
	name: 'selectionSlice',
	initialState: initialState,
	reducers: {
		setType: (state, action: PayloadAction<typeSneakers>) => {
			state.typeSneakers.push(action.payload)
		},
		deleteType: (state, action: PayloadAction<number>) => {
			state.typeSneakers = state.typeSneakers.filter(
				item => item.id !== action.payload
			)
		},
		setSize: (state, action) => {
			state.size.push(action.payload)
		},
		deleteSize: (state, action) => {
			state.size = state.size.filter(item => item.id !== action.payload)
		},
		setText: (state, action) => {
			state.text = action.payload
		},
		setPlusPage: (state, action) => {
			state.page += action.payload
		},
		setMinusPage: (state, action) => {
			state.page -= action.payload
		},
		clearSelection: () => initialState
	}
})

export default selectionSlice.reducer
export const {
	setType,
	setPlusPage,
	setSize,
	deleteSize,
	setMinusPage,
	deleteType,
	setText,
	clearSelection
} = selectionSlice.actions
