import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import style from '@style/Question.module.scss'
import { questions } from '../data/questions.ts'

const Question = () => {
	return (
		<section className={style.section}>
			<div className={style.container}>
				<h2 className={style.titleContainer}>Часто задаваемые вопросы</h2>
				{questions.map(item => (
					<Accordion key={item.id}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1a-content'
							id='panel1a-header'
						>
							<p className={style.title}>{item.title}</p>
						</AccordionSummary>
						<AccordionDetails>
							<p className={style.answer}>{item.answers}</p>
						</AccordionDetails>
					</Accordion>
				))}
			</div>
		</section>
	)
}

export default Question
