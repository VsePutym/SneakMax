import { RootState } from '../store.ts'

export const basketSelectors = {
	getAllBasket: (state: RootState) => state.basket
}
