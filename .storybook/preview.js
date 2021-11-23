import { GlobalStyle } from '../src/components/utils/theme'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}

export const decorators = [
	(story) => (
		<>
			<GlobalStyle />
			{story()}
		</>
	),
]