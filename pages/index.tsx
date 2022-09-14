import React from 'react';
import type { NextPage } from 'next';
import Navbar from '../components/navbar';
import HomePageHeader from '../components/homepage/header';

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<HomePageHeader />

			<Content />
		</>
	);
};

export default Home;
