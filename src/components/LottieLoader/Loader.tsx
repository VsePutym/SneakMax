import Lottie from 'lottie-react'
import animationData from '../../assets/animate/Loader.json'
import style from '@style/Loader.module.scss'
const Loader = () => {
	return (
		<div className={style.container}>
			<div>
				<Lottie
					className={style.LottieLoader}
					loop={true}
					animationData={animationData}
				/>
				<h1 className={style.title} color='secondary'>
					Loading....
				</h1>
			</div>
		</div>
	)
}

export default Loader
