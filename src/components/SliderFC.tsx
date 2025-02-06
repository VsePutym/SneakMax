import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Pagination } from 'swiper/modules'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from '@style/Slider.module.scss'
import slide1 from '@images/slider/slide1.png'
import slide2 from '@images/slider/slide2.png'
import slide3 from '@images/slider/slide3.png'
// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/effect-cube'
// @ts-ignore
import 'swiper/css/pagination'
const SliderFC = () => {
	return (
		<div>
			<div className={styles.wrapperSlider}>
				<h2 className={styles.titleSlider}>Air Max 1 new release</h2>
				<Swiper
					effect={'cube'}
					grabCursor={true}
					cubeEffect={{
						shadow: true,
						slideShadows: true,
						shadowOffset: 10,
						shadowScale: 0.94
					}}
					pagination={true}
					modules={[EffectCube, Pagination]}
					spaceBetween={0}
					className='mySwiper'
				>
					<SwiperSlide>
						<img
							className={styles.sliderPhoto}
							src={slide2}
							alt='Stylish modern clothing from Modee'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className={styles.sliderPhoto}
							src={slide1}
							alt='Stylish modern clothing from Modee'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className={styles.sliderPhoto}
							src={slide3}
							alt='Stylish modern clothing from Modee'
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default SliderFC
