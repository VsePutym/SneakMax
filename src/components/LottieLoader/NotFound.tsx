import Lottie from 'lottie-react'
import style from '@style/Loader.module.scss'
import img404 from '../../assets/animate/404.json'

const NotFound = () => {
	return (
		<div className={style.container}>
			<div>
				<Lottie className={style.Lottie} loop={true} animationData={img404} />
				<h1 className={style.title404} color='secondary'>
					Ошибка 404 Страница не найдена
				</h1>
			</div>
		</div>
	)
}

export default NotFound
