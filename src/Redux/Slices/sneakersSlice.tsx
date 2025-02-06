import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApiResponse, TStateSneakers } from '../../Types/sneakMax.ts'
import { getSneaker, getSneakers } from '../Actions/sneakersActions.ts'

const sneakersState: TStateSneakers = {
	sneakersArr: [],
	sneakers: {
		id: 0,
		vendorCode: '',
		inStock: 0,
		title: '',
		description: '',
		imgUrl: '',
		stars: 0,
		sizes: [0],
		price: 0,
		oldPrice: 0,
		gender: 'Мужской',
		color: '',
		compound: '',
		country: ''
	}
}

const sneakersSlice = createSlice({
	name: 'sneakersSlice',
	initialState: sneakersState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(
				getSneakers.fulfilled,
				(state, action: PayloadAction<ApiResponse>) => {
					state.sneakersArr = action.payload.items
				}
			)
			.addCase(getSneaker.fulfilled, (state, action) => {
				state.sneakers = action.payload
			})
	}
})

export default sneakersSlice.reducer
