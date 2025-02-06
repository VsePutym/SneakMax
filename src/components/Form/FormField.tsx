import { TextField } from '@mui/material'
import style from '@style/FormUser.module.scss'
import { FC } from 'react'
import { Controller, Control, FieldErrors } from 'react-hook-form'

interface FormFieldProps {
	control: Control<any>
	errors: FieldErrors<any>
	label: string
	name: string
	helperText?: string
}

const FormField: FC<FormFieldProps> = ({
	control,
	errors,
	label,
	name,
	helperText
}) => {
	return (
		<div>
			<Controller
				name={name} // Используем переданный пропс name
				control={control}
				defaultValue=''
				render={({ field }) => (
					<TextField
						{...field}
						sx={{ mb: 2 }}
						className={style.input}
						label={label} // Используем переданный пропс label
						variant='standard'
						error={!!errors[name]} // Используем name для получения ошибки
						helperText={helperText}
						fullWidth
					/>
				)}
			/>
		</div>
	)
}

export default FormField
