import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const ScrollToTopButton: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false)

	const handleScroll = () => {
		// Показываем кнопку, если прокрутили вниз на 100px
		if (window.scrollY > 100) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		// Добавляем слушатель события scroll
		window.addEventListener('scroll', handleScroll)

		// Убираем слушатель при размонтировании компонента
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div>
			{isVisible && (
				<Button
					variant='contained'
					color='primary'
					sx={{
						position: 'fixed',
						bottom: 20,
						right: 20,
						borderRadius: '15%',
						width: 20,
						height: 46,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						boxShadow: 3,
						zIndex: 1000,
						'&:hover': {
							backgroundColor: '#0056b3'
						}
					}}
					onClick={scrollToTop}
				>
					<ArrowUpwardIcon />
				</Button>
			)}
		</div>
	)
}

export default ScrollToTopButton
