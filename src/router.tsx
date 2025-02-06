import Loader from './components/LottieLoader/Loader.tsx'
import Basket from './features/Basket.tsx'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import NotFound from './components/LottieLoader/NotFound.tsx'
import Sneaker from './features/Sneaker.tsx'
import HomePage from './components/HomePage.tsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		loader: Loader,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: '/basket', element: <Basket /> },
			{ path: 'sneakers/:id', element: <Sneaker /> },
			{ path: '*', element: <NotFound /> }
		]
	},
	{ path: '*', element: <NotFound /> } // на случай, если будет попытка перейти на любой другой путь
])
