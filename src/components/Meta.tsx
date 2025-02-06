import { useAppDispatch, useAppSelector } from '../Hooks/Hooks.ts'
import { getSneakers } from '../Redux/Actions/sneakersActions.ts'
import { filterSelectors } from '../Redux/Selectors/filter.ts'
import style from '@style/Meta.module.scss'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

const Meta = () => {
	const dispatch = useAppDispatch()
	const meta = useAppSelector(filterSelectors.getMeta)
	const filterData = useAppSelector(filterSelectors.getAllFilters)
	const currentPage = meta.current_page
	const totalPages = meta.total_pages
	const range = 3

	const startPage = Math.max(currentPage - range, 1)
	const endPage = Math.min(currentPage + range, totalPages)

	const pages = []
	for (let i = startPage; i <= endPage; i++) {
		pages.push(i)
	}

	// Функции для изменения страницы
	const handlePrev = () => {
		if (currentPage > 1) {
			const data = { ...filterData, page: currentPage - 1 }
			dispatch(getSneakers({ data }))
		}
	}

	const handleNext = () => {
		if (currentPage < totalPages) {
			const data = { ...filterData, page: currentPage + 1 }
			dispatch(getSneakers({ data }))
		}
	}

	return (
		<div className={style.container}>
			<div className={style.button} onClick={handlePrev}>
				<KeyboardArrowLeftIcon />
			</div>

			{startPage > 1 && <div className={style.ellipsis}>...</div>}

			{pages.map(page => (
				<div
					key={page}
					className={`${style.page} ${page === currentPage ? style.current : ''}`}
					onClick={() => {
						const data = {
							...filterData,
							page
						}
						dispatch(getSneakers({ data }))
					}}
				>
					{page}
				</div>
			))}

			{endPage < totalPages && <div className={style.ellipsis}>...</div>}

			<div className={style.button} onClick={handleNext}>
				<KeyboardArrowRightIcon />
			</div>
		</div>
	)
}

export default Meta
