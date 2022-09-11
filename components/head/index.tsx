import React from 'react';
import Head from 'next/head';

export default function HeadComponent() {
	return (
		<Head>
			<title>Choose n'Cook</title>
			<link rel="icon" href="/logo-min.svg" />

			<link
				href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700&family=Roboto:wght@400;500;700&display=swap"
				rel="stylesheet"
			/>
		</Head>
	);
}
