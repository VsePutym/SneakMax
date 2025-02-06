import * as React from 'react'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import style from '@style/SliderAirBnB.module.scss'
import { useAppDispatch, useAppSelector } from '../../Hooks/Hooks.ts'
import { filterSelectors } from '../../Redux/Selectors/filter.ts'
import { setPrice } from '../../Redux/Slices/filterSlice.ts'

// Стилизация слайдера
const AirbnbSlider = styled(Slider)(({ theme }) => ({
	color: '#051129',
	height: 3,
	'& .MuiSlider-thumb': {
		height: 24,
		width: 24,
		backgroundColor: '#051129',
		border: '2px solid currentColor',
		'&:hover': {
			boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)'
		},
		'& .airbnb-bar': {
			height: 2,
			width: 1,
			backgroundColor: 'currentColor',
			marginLeft: 1,
			marginRight: 1
		}
	},
	'& .MuiSlider-track': {
		height: 1
	},
	'& .MuiSlider-rail': {
		color: '#d8d8d8',
		opacity: 1,
		height: 3,
		...theme.applyStyles('dark', {
			color: '#bfbfbf',
			opacity: undefined
		})
	}
}))

export default function CustomizedSlider() {
	const price = useAppSelector(filterSelectors.getPrice)
	const dispatch = useAppDispatch()
	const [value, setValue] = React.useState<number[]>(price)

	// @ts-ignore
	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		dispatch(setPrice(newValue))
		setValue(newValue as number[])
	}

	return (
		<div className={style.container}>
			<div className={style.wrapperPriceCounter}>
				<div className={style.price}>{value[0]} р</div>
				<div className={style.price}>{value[1]} р</div>
			</div>
			<AirbnbSlider
				value={value}
				onChange={handleSliderChange}
				defaultValue={[6300, 20999]}
				min={6300}
				max={20999}
				valueLabelFormat={value => `${value}`} // Форматируем отображаемое значение
			/>
		</div>
	)
}
