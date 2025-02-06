import { Button, Checkbox, Rating } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/LottieLoader/Loader.tsx'
import { useAppDispatch, useAppSelector } from '../Hooks/Hooks.ts'
import { getSneaker } from '../Redux/Actions/sneakersActions.ts'
import { sneakersSelectors } from '../Redux/Selectors/sneakers.ts'
import style from '@style/Sneaker.module.scss'
import { setBasket } from '../Redux/Slices/basketSlice.ts'

const Sneaker = () => {
	const { id } = useParams<{ id: string }>()
	const dispatch = useAppDispatch()
	const sneakers = useAppSelector(sneakersSelectors.getSneakers)
	const [selectedSize, setSelectedSize] = useState<number | null>()
	const articl = Math.floor(100000 + Math.random() * 900000)

	useEffect(() => {
		if (id) {
			dispatch(getSneaker(id))
		}
	}, [id, dispatch])

	if (!sneakers) {
		return <Loader />
	}

	const handleInBasket = () => {
		const sneaker = {
			...sneakers,
			sizes: [selectedSize]
		}
		dispatch(setBasket(sneaker))
	}

	return (
		<div className={style.container}>
			<div className={style.wrapperContainer}>
				<div className={style.wrapperImg}>
					<img
						className={style.imgUrl}
						src={sneakers.imgUrl}
						alt={sneakers.title}
					/>
					<div className={style.description}>
						<h2>Описание</h2>
						<p>{sneakers.description}</p>
					</div>
				</div>
				<div>
					<div className={style.wrapperColl}>
						<p className={style.articl}>Артикул: {articl}</p>
						<p>В наличии: {sneakers.inStock} шт</p>
					</div>
					<div className={style.flexWrapper}>
						<p>
							{sneakers.gender === 'Мужской' ? 'Мужские ' : 'Женские '}{' '}
							кроссовки {sneakers.title}{' '}
						</p>
					</div>
					<Rating
						name='read-only'
						value={sneakers.stars}
						sx={{ color: '#c9184a', mb: '39px' }}
						readOnly
					/>
					<p>Выберите размер</p>
					<div className={style.sizeGrid}>
						{sneakers.sizes.map(size => (
							<div
								key={size}
								onClick={() => setSelectedSize(size)}
								className={`${style.sizeItem} ${selectedSize === size ? style.selected : ''}`}
							>
								{size}
							</div>
						))}
					</div>
					<div className={style.wrapperPrice}>
						<p className={style.price}>{sneakers.price}</p>
						<p className={style.oldPrice}>{sneakers.oldPrice}</p>
					</div>
					<Button
						disabled={!selectedSize}
						variant='contained'
						sx={{ width: '100%', mb: '20px' }}
						onClick={handleInBasket}
					>
						Добавить в корзину
					</Button>
					<div className={style.wrapperChecks}>
						<div className={style.Check}>
							<Checkbox checked={true} size='small' />
							<p>Бесплатная доставка до двери</p>
						</div>

						<div className={style.Check}>
							<Checkbox checked={true} size='small' />
							<p>Оплата заказа при получении</p>
						</div>

						<div className={style.Check}>
							<Checkbox checked={true} size='small' />
							<p>Обмен в течении двух недель</p>
						</div>
					</div>

					<div>
						<h2 className={style.titleState}>Характеристики</h2>
						<p>Пол: {sneakers.gender}</p>
						<p>Цвета: {sneakers.color}</p>
						<p>Состав: {sneakers.compound}</p>
						<p>Страна: {sneakers.country}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sneaker
