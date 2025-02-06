import style from '@style/Footer.module.scss'
import { listLink } from '../data/Header.ts'

const Footer = () => {
	return (
		<section className={style.section}>
			<div className={style.container}>
				<h2>SneakMax</h2>
				<ul className={style.wrapperUl}>
					{listLink.map(item => (
						<li key={item.id}>
							<a href={item.link}>{item.title}</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Footer
