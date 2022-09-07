import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import navbarItemsData from '../../shared/jsons/navbar-items.json';

export default function Navbar() {
	const navbarItems = navbarItemsData.items.map((item) => {
		return (
			<div
				key={item.name}
				className="cursor-pointer px-4 hover:bg-neutral-700 border-b-2 border-transparent hover:border-slate-300 block py-5"
			>
				<Link href={item.link}>
					<span className="font-serif font-light text-slate-50 text-sm">
						{item.name}
					</span>
				</Link>
			</div>
		);
	});

	return (
		<div className="bg-neutral-800 px-8 flex justify-between items-center h-full">
			<div className="py-1 flex items-center">
				<Link href="/">
					<Image
						src="/logo-min.svg"
						alt="Website logo"
						width={50}
						height={50}
						className="cursor-pointer"
					/>
				</Link>
			</div>

			<div className="flex">{navbarItems}</div>

			<div></div>
		</div>
	);
}
