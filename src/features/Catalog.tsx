import style from '@style/Catalog.module.scss'
import Loader from '../components/LottieLoader/Loader.tsx'
import Meta from '../components/Meta.tsx'
import SliderFC from '../components/SliderFC.tsx'
import SneakerCard from '../components/SneakerCard.tsx'
import FilterControl from '../components/ControllerFilter/FilterControl.tsx'
import { useAppSelector } from '../Hooks/Hooks.ts'
import { filterSelectors } from '../Redux/Selectors/filter.ts'
import { sneakersSelectors } from '../Redux/Selectors/sneakers.ts'
import { sneakMax } from '../Redux/Selectors/sneakMax.ts'
const Catalog = () => {
	const showMeta = useAppSelector(filterSelectors.getMeta).total_pages
	const sneakers = useAppSelector(sneakersSelectors.getSneakersArr)
	const isLoading = useAppSelector(sneakMax.isLoading)

	return (
		<>
			<div id='Catalog' className={style.wrapperContainer}>
				<SliderFC />
			</div>
			<div className={style.container}>
				<h1 className={style.title}>Каталог</h1>
				<div className={style.containerCatalog}>
					<FilterControl />
					{isLoading ? (
						<Loader />
					) : (
						<SneakerCard
							buttonName='в корзину'
							sneakers={sneakers}
							styleProps='catalogContainer'
							dispatchProps='dispatchBasket'
						/>
					)}
				</div>
				{showMeta > 1 && <Meta />}
			</div>
		</>
	)
}

export default Catalog
