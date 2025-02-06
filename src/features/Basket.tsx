import { Button } from '@mui/material'
import style from '@style/Basket.module.scss'
import Lottie from 'lottie-react'
import { useMemo } from 'react'
import SneakerCard from '../components/SneakerCard.tsx'
import { useAppDispatch, useAppSelector } from '../Hooks/Hooks.ts'
import { basketSelectors } from '../Redux/Selectors/basket.ts'
import emptyCart from '../assets/animate/cartEmpty2.json'
import { setOpenModalUser } from '../Redux/Slices/sneakMaxSlice.ts'
const Basket = () => {
	const sneakers = useAppSelector(basketSelectors.getAllBasket)
	const dispatch = useAppDispatch()

	const totalPrice = useMemo(() => {
		return sneakers.reduce((sum, sneaker) => sum + Number(sneaker.price), 0)
	}, [sneakers])

	const formattedTotalPrice = totalPrice.toLocaleString()

	return (
		<div className={style.container}>
			{sneakers.length > 0 ? (
				<div className={style.wrapperSneakers}>
					<div className={style.wrapperSubmit}>
						<h1 className={style.title}>Корзина</h1>
						<p>Товаров в корзине: {sneakers.length}</p>
						<p>Итого: {formattedTotalPrice}</p>
						<Button
							sx={{ mt: '20px' }}
							variant='contained'
							onClick={() => dispatch(setOpenModalUser())}
						>
							Оформить заказ
						</Button>
					</div>
					<SneakerCard
						sneakers={sneakers}
						styleProps='basketContainer'
						dispatchProps='dispatchDelete'
						buttonName='Удалить'
					/>
				</div>
			) : (
				<div className={style.wrapperLottie}>
					<div>
						<h1>Корзина пуста</h1>
						<Lottie className={style.lottie} animationData={emptyCart} />
					</div>
				</div>
			)}
		</div>
	)
}

export default Basket
