import React from 'react';
import type { NextPage } from 'next';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Icon } from '@mui/material';

const Register: NextPage = () => {
	return (
		<div className="h-screen w-screen flex">
			<div className="h-full w-1/2 bg-neutral-100 flex flex-col p-5">
				<Link href="/">
					<span className="text-base cursor-pointer flex items-center text-gray-400 hover:text-gray-500 font-sans">
						<Icon>chevron_left</Icon>
						Retourner à l'accueil
					</span>
				</Link>

				<div className="w-full h-full flex justify-center items-center">
					<div className="flex flex-col items-center w-1/3">
						<h3 className="font-serif font-semibold text-lg mb-2">
							S'enregistrer
						</h3>

						<TextField
							id="username-input"
							label="Nom d'utilisateur"
							size="small"
							fullWidth
							margin="dense"
							className="bg-slate-50"
						/>

						<TextField
							id="email-input"
							label="Email"
							size="small"
							fullWidth
							margin="dense"
							className="bg-slate-50"
						/>

						<TextField
							id="password-input"
							label="Mot de passe"
							size="small"
							fullWidth
							type="password"
							margin="dense"
							className="bg-slate-50"
						/>

						<TextField
							id="confirmation-input"
							label="Confirmation du mot de passe"
							size="small"
							fullWidth
							type="password"
							margin="dense"
							className="bg-slate-50"
						/>

						<button
							type="button"
							className="bg-[#e44b4d] hover:bg-[#FB3739] text-white font-medium py-2 px-4 mt-4 rounded-md uppercase text-base"
						>
							S'inscrire
						</button>

						<Link href="/login">
							<span className="text-sm cursor-pointer flex items-center text-gray-400 hover:text-gray-500 font-sans mt-2">
								Déjà inscrit ?
							</span>
						</Link>
					</div>
				</div>
			</div>

			<div className='h-full w-1/2 bg-[url("/images/pizza.jpg")] bg-cover bg-center'></div>
		</div>
	);
};

export default Register;
