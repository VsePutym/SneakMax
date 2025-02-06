import { createSlice } from '@reduxjs/toolkit'
import { TStateTeam } from '../../Types/Team.ts'
import { getTeam } from '../Actions/teamAction.ts'

const initialState: TStateTeam = []

const teamSlice = createSlice({
	name: 'teamSlice',
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getTeam.fulfilled, (_, action) => {
			return action.payload
		})
	}
})

export default teamSlice.reducer
