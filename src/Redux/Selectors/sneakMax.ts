import { RootState } from '../store.ts'

export const sneakMax = {
	getOpenMenu: (state: RootState) => state.sneakMax.openMenu,
	getBasketModal: (state: RootState) => state.sneakMax.modalBasket,
	isLoading: (state: RootState) => state.sneakMax.isLoading,
	getModalUser: (state: RootState) => state.sneakMax.modalUser
}
