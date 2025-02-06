import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApiResponse, TStateFilter } from '../../Types/sneakMax.ts'
import { getSneakers } from '../Actions/sneakersActions.ts'

const initialState: TStateFilter = {
	gender: 'Мужской',
	price: [6300, 20999],
	sizes: 42,
	page: 1,
	meta: {
		total_items: 1,
		total_pages: 1,
		current_page: 1,
		per_page: 1,
		remaining_count: 1
	}
}

const filterSlice = createSlice({
	name: 'filterSlice',
	initialState: initialState,
	reducers: {
		setGender: (state, action) => {
			state.gender = action.payload
		},
		setPrice: (state, action) => {
			state.price = action.payload
		},
		setSizes: (state, action) => {
			state.sizes = action.payload
		}
	},
	extraReducers: builder => {
		builder.addCase(
			getSneakers.fulfilled,
			(state, action: PayloadAction<ApiResponse>) => {
				state.meta = action.payload.meta
			}
		)
	}
})

export const { setGender, setPrice, setSizes } = filterSlice.actions
export default filterSlice.reducer
