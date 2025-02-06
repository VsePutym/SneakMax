import { createAsyncThunk } from '@reduxjs/toolkit'
import { TStateTeam } from '../../Types/Team.ts'

export const getTeam = createAsyncThunk<TStateTeam>(
	'team/getTeam',
	async () => {
		const response = await fetch('https://6ff210cfde18528e.mokky.dev/team')
		return response.json()
	}
)
