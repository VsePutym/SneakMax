import { Button } from '@mui/material'
import style from '@style/Banner.module.scss'
import { Link } from 'react-router-dom'

const Banner = () => {
	return (
		<div className={style.wrapperContainer}>
			<div className={style.container}>
				<h1 className={style.title}>
					Кроссовки известных брендов <br /> с доставкой по России и СНГ
				</h1>
				<h2 className={style.subtitle}>
					Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, <br />
					Converse и многие другие по низким ценам
				</h2>
				<Link to='/'>
					<Button variant='outlined' className={style.button}>
						Перейти к покупкам
					</Button>
				</Link>
			</div>
			<p className={style.bigLogo}>SneakMax</p>
		</div>
	)
}

export default Banner
