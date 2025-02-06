import style from '@style/SizeGrid.module.scss'
import { useAppDispatch, useAppSelector } from '../../Hooks/Hooks.ts'
import { filterSelectors } from '../../Redux/Selectors/filter.ts'
import { setSizes } from '../../Redux/Slices/filterSlice.ts'
const SizeGrid = () => {
	const selectedSize = useAppSelector(filterSelectors.getSizes)
	const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43]
	const dispatch = useAppDispatch()
	const handleSizeClick = (size: number) => {
		dispatch(setSizes(size))
	}

	return (
		<div className={style.wrapperSize}>
			<p>Размер</p>
			<div className={style.sizeGrid}>
				{sizes.map(size => (
					<div
						key={size}
						onClick={() => handleSizeClick(size)}
						className={`${style.sizeItem} ${selectedSize === size ? style.selected : ''}`}
					>
						{size}
					</div>
				))}
			</div>
		</div>
	)
}

export default SizeGrid
