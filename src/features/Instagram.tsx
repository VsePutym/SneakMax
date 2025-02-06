import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, FormHelperText, TextField } from '@mui/material'
import style from '@style/Instagram.module.scss'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { useAppDispatch } from '../Hooks/Hooks.ts'
import { QuestionAction } from '../Redux/Actions/userActions.ts'
import { TFormQuestion } from '../Types/sneakMax.ts'
import logoInstagram from '@images/instagram/logoInst.png'
import photo1 from '@images/instagram/photo1.jpg'
import photo3 from '@images/instagram/photo3.jpg'
import photo4 from '@images/instagram/photo4.jpg'
import photo5 from '@images/instagram/photo5.jpg'
import photo6 from '@images/instagram/photo6.jpg'

const schema = yup.object().shape({
	name: yup
		.string()
		.required('Поле обязательно для заполнения')
		.min(2, 'Минимум 2 символа'),
	phone: yup
		.string()
		.required('Поле обязательно для заполнения')
		.test('is-valid-phone', 'Неверный номер телефона', value =>
			isValidPhoneNumber(value || '')
		)
})
const Instagram = () => {
	const dispatch = useAppDispatch()
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<TFormQuestion>({
		resolver: yupResolver(schema)
	})

	const onSubmit = async (data: TFormQuestion) => {
		const payload = {
			name: data.name,
			phone: data.phone
		}
		try {
			dispatch(QuestionAction(payload)).then(() => {
				toast.success('Запрос отправлен! 🚀', {
					position: 'bottom-center',
					autoClose: 5000
				})
			})
		} catch (error) {
			console.error('Ошибка при отправке формы:', error)
			toast.success('Произошла ошибка  😭', {
				position: 'bottom-center',
				autoClose: 5000
			})
		}
	}

	return (
		<section className={style.section}>
			<div className={style.container}>
				<Box
					component='form'
					className={style.form}
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className={style.wrapperText}>
						<h2 className={style.titleForm}>Есть вопросы?</h2>
						<p className={style.text}>
							Заполните форму и наш менеджер свяжется с вами
						</p>
					</div>
					<Controller
						name='name' // Используем переданный пропс name
						control={control}
						defaultValue=''
						render={({ field }) => (
							<TextField
								{...field}
								sx={{ mb: 2 }}
								className={style.input}
								label='Имя' // Используем переданный пропс label
								variant='outlined'
								error={!!errors.name} // Используем name для получения ошибки
								helperText={errors.name?.message}
								fullWidth
							/>
						)}
					/>
					<Controller
						name='phone'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<>
								<PhoneInput
									{...field}
									international
									defaultCountry='RU'
									className={style.inputPhone}
								/>
								{errors.phone && (
									<FormHelperText error>{errors.phone?.message}</FormHelperText>
								)}
							</>
						)}
					/>
					<Button
						sx={{ pt: 2, pb: 2, mt: 2 }}
						className={style.BtnSubmit}
						type='submit'
						variant='contained'
						color='primary'
					>
						Отправить
					</Button>
				</Box>

				<div className={style.wrapperInstagram}>
					<img src={logoInstagram} alt='img' />
					<div className={style.gallery}>
						<img src={photo1} alt='img' />
						<img src={photo6} alt='img' />
						<img src={photo4} alt='img' />
						<img src={photo3} alt='img' />
						<img src={photo5} alt='img' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Instagram
