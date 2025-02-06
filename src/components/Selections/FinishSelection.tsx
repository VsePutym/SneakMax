import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button } from '@mui/material'
import style from '@style/Selection.module.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useAppDispatch, useAppSelector } from '../../Hooks/Hooks.ts'
import { selectionAction } from '../../Redux/Actions/userActions.ts'
import { selectionSneakers } from '../../Redux/Selectors/selectionSneakers.ts'
import { clearSelection } from '../../Redux/Slices/selectionSlice.ts'
import { TFormUser } from '../../Types/sneakMax.ts'
import FormField from '../Form/FormField.tsx'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const schema = yup.object().shape({
	name: yup
		.string()
		.required('Поле обязательно для заполнения')
		.min(2, 'Минимум 2 символа'),
	email: yup
		.string()
		.required('Поле обязательно для заполнения')
		.email('Некорректная почта')
})
const FinishSelection = () => {
	const dispatch = useAppDispatch()
	const AllSelection = useAppSelector(selectionSneakers.getAllSelectionSneakers)

	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<TFormUser>({
		resolver: yupResolver(schema)
	})

	const onSubmit = async (data: TFormUser) => {
		const payload = {
			userData: {
				name: data.name,
				email: data.email
			},
			selections: AllSelection
		}
		try {
			dispatch(selectionAction(payload)).then(() => {
				toast.success('Форма успешно отправлена! 🚀', {
					position: 'bottom-center',
					autoClose: 10000
				})
				dispatch(clearSelection())
			})
		} catch (error) {
			console.error('Ошибка при отправке формы:', error)
			toast.error('❌ Произошла ошибка при отправке формы.', {
				position: 'bottom-center',
				autoClose: 5000
			})
			dispatch(clearSelection())
		}
	}

	return (
		<div>
			<div className={style.wrapperTitle}>
				<h1 className={style.title}>Ваша подборка готова!</h1>
				<p className={style.subtitle}>
					Оставьте свои контактные данные, чтобы бы мы могли отправить
					подготовленный для вас каталог
				</p>
			</div>
			<div className={style.containerForm}>
				<h2 className={style.titleForm}>Получить предложение</h2>
				<p>Получите подборку подходящих для вас моделей на почту</p>

				<Box
					component='form'
					className={style.form}
					onSubmit={handleSubmit(onSubmit)}
				>
					{/* Имя */}

					<FormField
						control={control}
						errors={errors}
						label='Имя'
						name='name'
						helperText={errors.name?.message}
					/>

					{/* Email */}
					<FormField
						control={control}
						errors={errors}
						label='Email'
						name='email'
						helperText={errors.email?.message}
					/>

					{/* Кнопка отправки */}
					<Button
						sx={{ mt: 2 }}
						type='submit'
						variant='contained'
						color='primary'
					>
						Получить
					</Button>
				</Box>
			</div>
		</div>
	)
}

export default FinishSelection
