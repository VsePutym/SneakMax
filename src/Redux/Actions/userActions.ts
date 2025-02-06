import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {
	TFormQuestion,
	TFormUser,
	TStateSelection
} from '../../Types/sneakMax.ts'

export const selectionAction = createAsyncThunk<
	void,
	{ userData: TFormUser; selections: TStateSelection }
>('selection/selectionAction', async payload => {
	try {
		await axios.post('https://6ff210cfde18528e.mokky.dev/Selection', payload)
	} catch (e: Error | any) {
		console.log(e.message)
	}
})

export const QuestionAction = createAsyncThunk<void, TFormQuestion>(
	'question/QuestionAction',
	async payload => {
		try {
			await axios.post('https://6ff210cfde18528e.mokky.dev/question', payload)
		} catch (e: Error | any) {
			console.log(e.message)
		}
	}
)
