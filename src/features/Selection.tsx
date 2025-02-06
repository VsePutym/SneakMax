import { Button } from '@mui/material'
import style from '@style/Selection.module.scss'
import FinishSelection from '../components/Selections/FinishSelection.tsx'
import SizeSneakers from '../components/Selections/SizeSneakers.tsx'
import TextAria from '../components/Selections/TextAria.tsx'
import TypeSneakers from '../components/Selections/TypeSneakers.tsx'
import { useAppDispatch, useAppSelector } from '../Hooks/Hooks.ts'
import { selectionSneakers } from '../Redux/Selectors/selectionSneakers.ts'
import { setPlusPage, setMinusPage } from '../Redux/Slices/selectionSlice.ts'

const Selection = () => {
	const page = useAppSelector(selectionSneakers.getPageSelection)
	const dispatch = useAppDispatch()

	const renderPageContent = () => {
		switch (page) {
			case 1:
				return <TypeSneakers />
			case 2:
				return <SizeSneakers />
			case 3:
				return <TextAria />
			case 4:
				return <FinishSelection />
			default:
				return null
		}
	}

	return (
		<div id='Selection' className={style.wrapperContainer}>
			<div className={style.container}>
				{page === 4 ? (
					renderPageContent()
				) : (
					<>
						<div className={style.wrapperTitle}>
							<h1 className={style.title}>
								Мы подберем идеальную пару для вас
							</h1>
							<p className={style.subtitle}>
								Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
								для вас моделями
							</p>
						</div>
						{renderPageContent()}
						<div className={style.wrapperBtns}>
							<p>{page} из 3</p>
							<div>
								{page > 1 && (
									<Button
										sx={{ mr: 2 }}
										onClick={() => dispatch(setMinusPage(1))}
										variant='contained'
									>
										Назад
									</Button>
								)}
								<Button
									onClick={() => dispatch(setPlusPage(1))}
									variant='contained'
								>
									Следующий шаг
								</Button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Selection
