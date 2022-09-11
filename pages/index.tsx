import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar';
import HeadComponent from '../components/head';

const Home: NextPage = () => {
	return (
		<>
			<HeadComponent />

			<Navbar />
		</>
	);
};

export default Home;
