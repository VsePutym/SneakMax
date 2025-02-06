import CloseIcon from '@mui/icons-material/Close'
import InstagramIcon from '@mui/icons-material/Instagram'
import MenuIcon from '@mui/icons-material/Menu'
import TelegramIcon from '@mui/icons-material/Telegram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Drawer } from '@mui/material'
import style from '@style/Header.module.scss'
import { listLink } from '../data/Header.ts'
import { useAppDispatch, useAppSelector } from '../Hooks/Hooks.ts'
import { sneakMax } from '../Redux/Selectors/sneakMax.ts'
import {
	setOpenMenu,
	setOpenModalBasket
} from '../Redux/Slices/sneakMaxSlice.ts'

const MobileMenu = () => {
	const dispatch = useAppDispatch()
	const menu = useAppSelector(sneakMax.getOpenMenu)
	return (
		<div onClick={() => dispatch(setOpenMenu())}>
			<MenuIcon fontSize='large' color='secondary' />
			<Drawer anchor='top' open={menu}>
				<div className={style.wrapperMenu}>
					<div>
						<h2 style={{ color: '#051129', marginBottom: '10px' }}>SneakMax</h2>
						<div>
							<TwitterIcon
								sx={{ mr: '10px' }}
								color='primary'
								fontSize='large'
							/>
							<TelegramIcon
								sx={{ mr: '10px' }}
								color='primary'
								fontSize='large'
							/>
							<InstagramIcon color='primary' fontSize='large' />
						</div>
					</div>

					<ul className={style.ulMobile}>
						<li
							style={{
								marginBottom: '20px'
							}}
						>
							<CloseIcon color='secondary' fontSize='large' />
						</li>
						{listLink.map(item => (
							<li
								className={style.liMobile}
								key={item.id}
								onClick={() => dispatch(setOpenMenu())}
							>
								<a onClick={() => dispatch(setOpenMenu())} href={item.link}>
									{item.title}
								</a>
							</li>
						))}
						<li
							className={style.liMobile}
							onClick={() => dispatch(setOpenModalBasket())}
						>
							<a>Корзина</a>
						</li>
					</ul>
				</div>
				)
			</Drawer>
		</div>
	)
}

export default MobileMenu
