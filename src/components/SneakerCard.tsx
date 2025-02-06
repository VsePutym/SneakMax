import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../Hooks/Hooks.ts'
import style from '@style/SneakerCard.module.scss'
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button
} from '@mui/material'
import { filterSelectors } from '../Redux/Selectors/filter.ts'
import { deleteItemBasket, setBasket } from '../Redux/Slices/basketSlice.ts'
import { Product, Products } from '../Types/Products.ts'
import NotItems from './LottieLoader/NotItems.tsx'

interface SneakerCardProps {
	sneakers: Products
	styleProps: string
	dispatchProps: string
	buttonName: string
}

const SneakerCard: FC<SneakerCardProps> = ({
	sneakers,
	styleProps,
	dispatchProps,
	buttonName
}) => {
	const dispatch = useAppDispatch()
	const getSize = useAppSelector(filterSelectors.getSizes)
	const [toastAdd, setToastAdd] = useState(false)
	const [toastDel, setToastDel] = useState(false)

	const addSneakersBasket = (sneaker: Product) => {
		const newSneaker = { ...sneaker, sizes: getSize }
		dispatch(setBasket(newSneaker))
		setToastAdd(true)
	}

	const deleteSneakersBasket = (index: number) => {
		dispatch(deleteItemBasket(index))
		setToastDel(true)
	}

	useEffect(() => {
		if (toastAdd) {
			toast.success('Кроссовки были добавлены в корзину! 🛒', {
				position: 'bottom-center',
				autoClose: 5000
			})
			setToastAdd(false)
		} else if (toastDel) {
			toast.success('Кроссовки были удалены из корзины! ❌', {
				position: 'bottom-center',
				autoClose: 5000
			})
			setToastDel(false)
		}
	}, [toastAdd, toastDel])

	if (sneakers.length === 0) {
		return <NotItems />
	}
	return (
		<div className={`${style[styleProps]}`}>
			{sneakers.map((sneaker: Product, index: number) => (
				<Card key={index} className={style.Card}>
					<CardMedia
						sx={{ height: 200, objectFit: 'contain' }}
						image={sneaker.imgUrl}
						title={sneaker.title}
					/>
					<CardContent>
						<p className={style.title}>{sneaker.title}</p>
						<div className={style.wrapperPrice}>
							<p className={style.price}>{sneaker.price} руб.</p>
							<p className={style.oldPrice}>{sneaker.oldPrice} руб</p>
						</div>
					</CardContent>
					<CardActions>
						<Button
							onClick={
								dispatchProps === 'dispatchBasket'
									? () => addSneakersBasket(sneaker)
									: () => deleteSneakersBasket(index)
							}
							size='small'
						>
							{buttonName}
						</Button>
						<Link to={`/sneakers/${sneaker.id}`}>
							<Button size='small'>Подробнее</Button>
						</Link>
					</CardActions>
				</Card>
			))}
		</div>
	)
}

export default SneakerCard
