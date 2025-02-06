import { RootState } from '../store.ts'

export const selectorsTeam = {
	getAllTeam: (state: RootState) => state.team
}
