import { combineReducers, configureStore } from '@reduxjs/toolkit'
import basketSlice from './Slices/basketSlice.ts'
import filterSlice from './Slices/filterSlice.ts'
import selectionSlice from './Slices/selectionSlice.ts'
import sneakersSlice from './Slices/sneakersSlice.tsx'
import sneakMaxSlice from './Slices/sneakMaxSlice.ts'
import teamSlice from './Slices/teamSlice.ts'

const rootReducer = combineReducers({
	sneakMax: sneakMaxSlice,
	filter: filterSlice,
	sneakers: sneakersSlice,
	basket: basketSlice,
	selection: selectionSlice,
	team: teamSlice
})
export const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
