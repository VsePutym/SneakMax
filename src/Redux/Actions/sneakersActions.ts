import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ApiResponse, TStateFilter } from '../../Types/sneakMax.ts'

export const getSneakers = createAsyncThunk<
	ApiResponse,
	{ data: TStateFilter }
>('sneakers/getSneakers', async ({ data }) => {
	const limit = 6
	const response = await axios.get(
		`https://6ff210cfde18528e.mokky.dev/items?limit=${limit}&page=${data.page}&gender=${data.gender}&price[from]=${data.price[0]}&price[to]=${data.price[1]}&sizes[]=${data.sizes}`
	)
	return response.data
})

export const getSneaker = createAsyncThunk(
	'sneaker/getSneaker',
	async (id: string) => {
		const response = await axios.get(
			`https://6ff210cfde18528e.mokky.dev/items/${id}`
		)
		return response.data
	}
)
