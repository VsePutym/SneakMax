import { useMediaQuery } from '@mui/material'
import style from '@style/Header.module.scss'
import { Link } from 'react-router-dom'
import MobileMenu from '../components/MobileMenu.tsx'
import { listLink } from '../data/Header.ts'
import basketIcon from '@icons/basket.svg'
import Badge from '@mui/material/Badge'
import { useAppDispatch, useAppSelector } from '../Hooks/Hooks.ts'
import { basketSelectors } from '../Redux/Selectors/basket.ts'
import { setOpenModalBasket } from '../Redux/Slices/sneakMaxSlice.ts'
const Header = () => {
	const isSmallScreen = useMediaQuery('(max-width:1025px)')
	const lengthBasket = useAppSelector(basketSelectors.getAllBasket).length
	const dispatch = useAppDispatch()

	return (
		<div className={style.wrapperContainer}>
			<div className={style.container}>
				<Link to='/'>
					<h1 className={style.logo}>SneakMax</h1>
				</Link>
				{isSmallScreen ? (
					<MobileMenu />
				) : (
					<ul className={style.ul}>
						{listLink.map(item => (
							<li className={style.li} key={item.id}>
								<a href={item.link}>{item.title}</a>
							</li>
						))}
						<Badge
							badgeContent={lengthBasket}
							color='secondary'
							onClick={() => dispatch(setOpenModalBasket())}
						>
							<li className={style.li}>
								<a>Корзина</a>
							</li>
							<img
								style={{ marginLeft: '10px' }}
								src={basketIcon}
								alt='iconBasket'
							/>
						</Badge>
					</ul>
				)}
			</div>
		</div>
	)
}

export default Header
