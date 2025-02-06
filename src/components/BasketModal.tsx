import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Lottie from 'lottie-react'
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../Hooks/Hooks.ts'
import { basketSelectors } from '../Redux/Selectors/basket.ts'
import { sneakMax } from '../Redux/Selectors/sneakMax.ts'
import { deleteItemBasket } from '../Redux/Slices/basketSlice.ts'
import { setOpenModalBasket } from '../Redux/Slices/sneakMaxSlice.ts'
import style from '@style/BasketModal.module.scss'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import cart from '../assets/animate/cartEmpty2.json'

const BasketModal = () => {
	const showBasket = useAppSelector(sneakMax.getBasketModal)
	const [toastDel, setToastDel] = useState(false)
	const basket = useAppSelector(basketSelectors.getAllBasket)
	const dispatch = useAppDispatch()
	const [scroll] = useState<DialogProps['scroll']>('paper')

	const totalPrice = useMemo(() => {
		return basket.reduce((sum, sneaker) => sum + Number(sneaker.price), 0)
	}, [basket])

	const formattedTotalPrice = totalPrice.toLocaleString()

	const deleteSneakersBasket = (index: number) => {
		dispatch(deleteItemBasket(index))
		setToastDel(true)
	}

	useEffect(() => {
		if (toastDel) {
			toast.success('Кроссовки были удалены из корзины! ❌', {
				position: 'bottom-center',
				autoClose: 10000
			})
			setToastDel(false)
		}
	}, [toastDel])

	return (
		<Dialog open={showBasket} scroll={scroll}>
			<DialogTitle
				id='scroll-dialog-title'
				sx={{
					color: '#051129',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<p>Корзина</p>

				<CloseIcon
					style={{ cursor: 'pointer' }}
					color='secondary'
					fontSize='medium'
					onClick={() => dispatch(setOpenModalBasket())}
				/>
			</DialogTitle>
			<DialogContent className={style.dialog} dividers={scroll === 'paper'}>
				{basket.length === 0 ? (
					<div className={style.emptyCart}>
						<p>Ваша корзина пуста</p>
						<Lottie className={style.lottie} animationData={cart} />
					</div>
				) : (
					<ul className={style.list}>
						{basket.map((sneaker, index) => (
							<li key={index} className={style.Card}>
								<img
									className={style.img}
									alt={sneaker.title}
									src={sneaker.imgUrl}
								/>
								<div className={style.descriptions}>
									<div className={style.wrapperTitle}>
										<div style={{ display: 'flex' }}>
											<p style={{ marginRight: '10px' }}>
												{sneaker.gender === 'Мужской' ? 'Мужские' : 'Женские'}
											</p>
											<p>кроссовки</p>
										</div>

										<p className={style.title}>{sneaker.title}</p>
									</div>
									<p className={style.price}>
										{sneaker.price.toLocaleString()}
									</p>
								</div>
								<DeleteForeverIcon
									onClick={() => deleteSneakersBasket(index)}
									fontSize='large'
									className={style.deleteIcon}
								/>
							</li>
						))}
					</ul>
				)}
			</DialogContent>
			<div className={style.footerModalBasket}>
				<div>
					<p>Итого:</p>
					<p>{formattedTotalPrice}</p>
				</div>

				<Link to='/basket' onClick={() => dispatch(setOpenModalBasket())}>
					<Button variant='contained'>Перейти в корзину</Button>
				</Link>
			</div>
		</Dialog>
	)
}

export default BasketModal
