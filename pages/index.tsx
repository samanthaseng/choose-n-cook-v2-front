import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700&family=Roboto:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Navbar />
		</div>
	);
};

export default Home;
