import { useMediaQuery } from '@mui/material'
import style from '@style/AboutUs.module.scss'
import bg from '@images/AboutUs/MaskGroup.jpg'
import bgBig from '@images/AboutUs/bg.jpg'
import elips from '@images/figure/elips.svg'
const AboutUs = () => {
	const isSmallScreen = useMediaQuery('(max-width:1270px)')
	return (
		<div id='AboutUs' className={style.section}>
			<img className={style.elips} src={elips} alt='figure' />
			<div className={style.container}>
				<div className={style.containerText}>
					<h2 className={style.title}>Пара слов о нас</h2>
					<p className={style.text}>
						Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через
						спорт мы можем менять жизни. В том числе с помощью воодушевляющих
						историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.
					</p>
					<div className={style.logo}>
						<div className={style.line} />
						SneakMax
					</div>
				</div>
				{isSmallScreen ? (
					<img className={style.imgBig} src={bgBig} alt='img' />
				) : (
					<img className={style.img} src={bg} alt='img' />
				)}
			</div>
		</div>
	)
}

export default AboutUs
