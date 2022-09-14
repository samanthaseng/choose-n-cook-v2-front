import Link from 'next/link';
import React from 'react';

export default function Header() {
	return (
		<div className='h-160 bg-[url("/images/home-image.jpg")] bg-cover bg-center'>
			<div className="bg-neutral-800 h-full w-full bg-opacity-30 flex justify-center items-center flex-col">
				<div className="flex justify-center">
					<div className="border-slate-50 h-8 w-[50vw] border border-b-transparent"></div>
				</div>

				<div className="flex justify-center">
					<h2 className="font-serif text-slate-50 text-center">
						<span className="text-[30px] font-light my-2">Bienvenue sur</span>
						<br />
						<span className="text-[40px] font-medium my-5">Choose n'Cook</span>
					</h2>
				</div>

				<div className="flex justify-between w-[50vw]">
					<div className="border-slate-50 h-8 w-[calc((100%-180px)/2-20px)] border border-t-transparent border-r-transparent"></div>
					<Link href="/register">
						<button
							type="button"
							className="font-serif text-slate-50 border border-slate-50 py-2 px-5 mx-4"
						>
							Créez votre recette
						</button>
					</Link>
					<div className="border-slate-50 h-8 w-[calc((100%-180px)/2-20px)] border border-t-transparent border-l-transparent"></div>
				</div>
			</div>
		</div>
	);
}
