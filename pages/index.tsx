import React from 'react';
import type { NextPage } from 'next';
import Navbar from '../components/navbar';
import HomePageHeader from '../components/homepage/header';
import Content from '../components/homepage/content';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Choose n&apos;Cook</title>
			</Head>

			<Navbar />
			<HomePageHeader />

			<Content />
		</>
	);
};

export default Home;
