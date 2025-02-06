import { RootState } from '../store.ts'

export const filterSelectors = {
	getPrice: (state: RootState) => state.filter.price,
	getGender: (state: RootState) => state.filter.gender,
	getSizes: (state: RootState) => state.filter.sizes,
	getPage: (state: RootState) => state.filter.page,
	getMeta: (state: RootState) => state.filter.meta,
	getAllFilters: (state: RootState) => state.filter
}
