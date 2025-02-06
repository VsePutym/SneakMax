import style from '@style/Adidas.module.scss'
import addidas from '@images/Addidas/addidas.jpg'
import SimpleParallax from 'simple-parallax-js'

const Adidas = () => {
	return (
		<div className={style.container}>
			<SimpleParallax orientation={'right'} scale={1.2} delay={0.1}>
				<img className={style.parallax1} src={addidas} alt={'image'} />
			</SimpleParallax>
			<h1 className={style.title}>New 2025 Adidas</h1>
		</div>
	)
}

export default Adidas
