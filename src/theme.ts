import { createTheme } from '@mui/material/styles'

// Цветовая палитра
const colors = {
	primary: '#051129',
	secondary: '#c9184a',
	background: '#fbfbff',
	error: '#3D255B',
	textPrimary: '#fbfbff',
	textSecondary: '#051129',
	gray: '#E0E0E0',
	hoverSecondary: '#a1123c'
}

// Общие шрифты
const fonts = {
	regular: 'IntroRegular,',
	bold: 'IntoBold',
	book: 'IntroBook,'
}

// Тема
const theme = createTheme({
	palette: {
		primary: {
			main: colors.primary,
			light: '#2c183b',
			dark: '#050E20',
			contrastText: colors.secondary
		},
		secondary: { main: colors.secondary, contrastText: colors.background },
		error: { main: colors.error },
		background: { default: colors.background },
		text: { primary: colors.textPrimary, secondary: colors.textSecondary }
	},

	typography: {
		fontFamily: fonts.book,
		h1: { fontFamily: fonts.bold },
		h2: { fontFamily: fonts.regular },
		body1: { fontFamily: fonts.book, fontWeight: 'normal' },
		body2: { fontFamily: fonts.book, fontWeight: 'normal' },
		button: { fontFamily: fonts.bold, fontWeight: 'bold' },
		subtitle1: { fontFamily: fonts.book, fontWeight: 'normal' },
		subtitle2: { fontFamily: fonts.book, fontWeight: 'normal' }
	},

	components: {
		MuiStepIcon: {
			styleOverrides: {
				root: {
					color: colors.gray,
					'&.Mui-active': { color: colors.secondary },
					'&.Mui-completed': { color: colors.primary },
					'& text': { fill: colors.textPrimary }
				}
			}
		},
		MuiStepLabel: {
			styleOverrides: {
				label: {
					color: colors.primary,
					'&.Mui-active': { color: colors.secondary },
					'&.Mui-completed': { color: colors.primary }
				}
			}
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					fontFamily: fonts.regular,
					fontWeight: 'normal',
					color: colors.textSecondary
				}
			}
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					'& .MuiInputBase-input': {
						color: colors.textSecondary,
						backgroundColor: colors.background
					},
					'& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' },
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: colors.secondary
					},
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: colors.secondary
					}
				}
			}
		},
		MuiCssBaseline: {
			styleOverrides: {
				p: {
					fontFamily: fonts.regular,
					fontWeight: 'normal',
					margin: 0,
					padding: 0
				}
			}
		},
		MuiCheckbox: {
			styleOverrides: {
				root: { fontFamily: fonts.regular, fontWeight: 'normal' }
			}
		},
		MuiFormControlLabel: {
			styleOverrides: {
				label: { fontFamily: fonts.regular, fontWeight: 'normal' }
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: colors.secondary,
					color: colors.textPrimary,
					'&:hover': { backgroundColor: colors.hoverSecondary }
				},
				text: {
					backgroundColor: 'transparent',
					color: colors.secondary,
					'&:hover': { backgroundColor: 'rgba(201, 24, 74, 0.1)' }
				}
			}
		}
	}
})

export default theme
