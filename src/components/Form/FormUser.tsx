import { yupResolver } from '@hookform/resolvers/yup'
import {
	Box,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	FormHelperText
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../../Hooks/Hooks.ts'
import { pushOrder } from '../../Redux/Actions/basketAction.ts'
import { basketSelectors } from '../../Redux/Selectors/basket.ts'
import { sneakMax } from '../../Redux/Selectors/sneakMax.ts'
import { deleteAllBasket } from '../../Redux/Slices/basketSlice.ts'
import { setOpenModalUser } from '../../Redux/Slices/sneakMaxSlice.ts'
import * as yup from 'yup'
import { FormInputs } from '../../Types/sneakMax.ts'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import style from '@style/FormUser.module.scss'
import FormField from './FormField.tsx'

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
		),
	email: yup
		.string()
		.required('Поле обязательно для заполнения')
		.email('Некорректная почта')
})

const FormUser = () => {
	const showModal = useAppSelector(sneakMax.getModalUser)
	const orders = useAppSelector(basketSelectors.getAllBasket)
	const dispatch = useAppDispatch()

	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<FormInputs>({
		resolver: yupResolver(schema)
	})

	const onSubmit = async (data: FormInputs) => {
		try {
			const payload = {
				userData: {
					name: data.name,
					email: data.email,
					phone: data.phone
				},
				orderData: orders
			}
			dispatch(pushOrder(payload)).then(() => {
				toast.success('Покупка совершена! 🚀', {
					position: 'bottom-center',
					autoClose: 5000
				})
				dispatch(setOpenModalUser())
				dispatch(deleteAllBasket())
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
		<Dialog
			onClose={() => dispatch(setOpenModalUser())}
			aria-labelledby='customized-dialog-title'
			open={showModal}
		>
			<div className={style.wrapperTitle}>
				<DialogTitle>Форма отправки</DialogTitle>
				<CloseIcon
					className={style.btnClose}
					onClick={() => dispatch(setOpenModalUser())}
				/>
			</div>
			<DialogContent dividers>
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

					{/* Номер телефона */}
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
								{/* Если ошибка, отображаем её */}
								{errors.phone && (
									<FormHelperText error>{errors.phone?.message}</FormHelperText>
								)}
							</>
						)}
					/>

					{/* Кнопка отправки */}
					<Button type='submit' variant='contained' color='primary'>
						Отправить
					</Button>
				</Box>
			</DialogContent>
		</Dialog>
	)
}

export default FormUser
