import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../components/utils/theme'

const AppComponent: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}

export default AppComponent
