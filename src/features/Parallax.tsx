import style from '@style/Parallax.module.scss'
import SimpleParallax from 'simple-parallax-js'
import img4 from '@images/ParallaxImage/parallax4.png'
const Parallax = () => {
	return (
		<section className={style.wrapperContainer}>
			<div className={style.container}>
				<SimpleParallax>
					<img className={style.parallax1} src={img4} alt={'image'} />
				</SimpleParallax>
				<h1 className={style.title}>
					Nike <br /> Air Max 90 Evo
				</h1>
			</div>
			<div className={style.description}>
				<p>
					<span> Nike Air Max 90 Evo</span> — это новая глава в истории
					легендарной модели. Мы сохранили дух оригинала, добавив современные
					технологии, чтобы создать кроссовок, который идеально сочетает стиль,
					комфорт и инновации. Усиленная амортизация Air, улучшенные материалы и
					смелый дизайн делают Air Max 90 Evo выбором для тех, кто готов к новым
					вершинам."
				</p>
			</div>
		</section>
	)
}

export default Parallax
