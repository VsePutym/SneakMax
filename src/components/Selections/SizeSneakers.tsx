import { Checkbox, FormControlLabel } from '@mui/material'
import style from '@style/Selection.module.scss'
import { useAppDispatch, useAppSelector } from '../../Hooks/Hooks.ts'
import { selectionSneakers } from '../../Redux/Selectors/selectionSneakers.ts'
import { deleteSize, setSize } from '../../Redux/Slices/selectionSlice.ts'
import { typeSize } from '../../Types/Products.ts'
import bg from '@images/Selector/Rectangle.jpg'

const SizeSneakers = () => {
	const getCheckBox = useAppSelector(selectionSneakers.getCheckBoxSize)
	const dispatch = useAppDispatch()
	const findChecked = (title: string) => {
		return getCheckBox.some(item => item.title === title)
	}
	const pushSize = (size: typeSize) => {
		const isChecked = getCheckBox.some(item => item.id === size.id)

		if (isChecked) {
			dispatch(deleteSize(size.id)) // Удаляем по id
		} else {
			dispatch(setSize(size)) // Добавляем объект
		}
	}

	const sizes = [
		{ id: 1, title: 'менее 36' },
		{ id: 2, title: '36-38' },
		{ id: 3, title: '39-41' },
		{ id: 4, title: '42-44' },
		{ id: 5, title: '45 и более' }
	]
	return (
		<div>
			<p className={style.titleType}>Какой тип кроссовок рассматриваете?</p>
			<ul className={style.wrapperSizes}>
				{sizes.map(size => (
					<div className={style.checkboxSize} key={size.id}>
						<FormControlLabel
							control={
								<Checkbox
									checked={findChecked(size.title)}
									onChange={() => pushSize(size)}
									name={size.title} // Имя для идентификации, какой чекбокс активирован
									color='primary'
								/>
							}
							label={size.title}
						/>
					</div>
				))}
			</ul>
			<img className={style.imgSize} src={bg} alt='bg' />
		</div>
	)
}

export default SizeSneakers
