import { RouterProvider } from 'react-router-dom'
import { noErrors } from './Functions/noErrors.ts'
import { router } from './router.tsx'

noErrors()
function App() {
	return <RouterProvider router={router} />
}

export default App
