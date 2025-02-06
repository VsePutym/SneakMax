import { createSlice } from '@reduxjs/toolkit'
import { TStateApp } from '../../Types/sneakMax.ts'
import { getSneakers } from '../Actions/sneakersActions.ts'

const stateApp: TStateApp = {
	openMenu: false,
	modalBasket: false,
	isLoading: false,
	modalSneakers: false,
	modalUser: false
}

const sneakMaxSlice = createSlice({
	name: 'appSlice',
	initialState: stateApp,
	reducers: {
		setOpenMenu: state => {
			state.openMenu = !state.openMenu
		},
		setOpenModalBasket: state => {
			state.modalBasket = !state.modalBasket
		},
		setOpenModalSneakers: state => {
			state.modalSneakers = !state.modalSneakers
		},
		setOpenModalUser: state => {
			state.modalUser = !state.modalUser
		}
	},
	extraReducers: builder => {
		builder
			.addCase(getSneakers.pending, state => {
				state.isLoading = true
			})
			.addCase(getSneakers.fulfilled, state => {
				state.isLoading = false
			})
	}
})

export default sneakMaxSlice.reducer
export const {
	setOpenMenu,
	setOpenModalBasket,
	setOpenModalSneakers,
	setOpenModalUser
} = sneakMaxSlice.actions
