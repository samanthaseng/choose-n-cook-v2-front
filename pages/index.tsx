import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar';
import HomePageHeader from '../components/homepage/header';
import HeadComponent from '../components/head';

const Home: NextPage = () => {
	return (
		<>
			<HeadComponent />

			<Navbar />
			<HomePageHeader />
		</>
	);
};

export default Home;
