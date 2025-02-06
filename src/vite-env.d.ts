/// <reference types="vite/client" />
declare module 'react-animation-on-scroll'
declare module 'react-scroll'

declare module '*.module.scss' {
	const styles: { [className: string]: string }
	export default styles
}

declare module '*.json' {
	const value: any
	export default value
}
