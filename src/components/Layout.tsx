import { ToastContainer } from 'react-toastify'
import Banner from '../features/Banner.tsx'
import Footer from '../features/Footer.tsx'
import Header from '../features/Header.tsx'
import { Outlet } from 'react-router-dom'
import BasketModal from './BasketModal.tsx'
import FormUser from './Form/FormUser.tsx'
import ScrollToTopButton from './ScrollToTopButton.tsx'

const Layout = () => {
	return (
		<div>
			<Header />
			<Banner />
			<main>
				<Outlet />
			</main>
			<Footer />
			<BasketModal />
			<FormUser />
			<ToastContainer />
			<ScrollToTopButton />
		</div>
	)
}

export default Layout
