import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="fr">
			<Head>
				<link rel="icon" href="/logo-min.svg" />

				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700&family=Roboto:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet"
				></link>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
