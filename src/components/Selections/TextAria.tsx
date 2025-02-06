import { TextField } from '@mui/material'
import style from '@style/Selection.module.scss'
import { useAppDispatch, useAppSelector } from '../../Hooks/Hooks.ts'
import { selectionSneakers } from '../../Redux/Selectors/selectionSneakers.ts'
import { setText } from '../../Redux/Slices/selectionSlice.ts'

const TextAria = () => {
	const text = useAppSelector(selectionSneakers.getText)
	const dispatch = useAppDispatch()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setText(event.target.value))
	}

	return (
		<div className={style.textAria}>
			<TextField
				label='Текст'
				multiline
				rows={4} // Указывает количество строк
				value={text}
				onChange={handleChange}
				variant='outlined' // Можно использовать "filled" или "standard"
				fullWidth // Растягивает по ширине контейнера
			/>
		</div>
	)
}

export default TextAria
