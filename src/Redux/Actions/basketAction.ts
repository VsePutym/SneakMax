import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Products } from '../../Types/Products.ts'
import { FormInputs } from '../../Types/sneakMax.ts'

export const pushOrder = createAsyncThunk<
	void,
	{ userData: FormInputs; orderData: Products }
>('basket/pushOrder', async payload => {
	try {
		await axios.post(
			'https://6ff210cfde18528e.mokky.dev/orders',
			{
				payload
			},
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
	} catch (e: Error | any) {
		console.log(e.message)
	}
})
