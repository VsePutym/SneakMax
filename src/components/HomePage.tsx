import AboutUs from '../features/AboutUs.tsx'
import Adidas from '../features/Adidas.tsx'
import Catalog from '../features/Catalog.tsx'
import Contacts from '../features/Contacts.tsx'
import Instagram from '../features/Instagram.tsx'
import Parallax from '../features/Parallax.tsx'
import Question from '../features/Question.tsx'
import Selection from '../features/Selection.tsx'
import Stepper from '../features/Stepper.tsx'
import Team from '../features/Team.tsx'

const HomePage = () => {
	return (
		<div>
			<Catalog />
			<Parallax />
			<Stepper />
			<Adidas />
			<AboutUs />
			<Selection />
			<Team />
			<Question />
			<Contacts />
			<Instagram />
		</div>
	)
}

export default HomePage
