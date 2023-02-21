import React from 'react';
import {
	Checkbox,
	FormControlLabel,
	FormGroup,
	InputAdornment,
	TextField,
	IconButton,
} from '@material-ui/core';
import { Search } from '@mui/icons-material';
import recipesListExample from '../../shared/jsons/recipes.json';
import RecipeCard from '../recipe/card';

export default function Content() {
	const recipes = recipesListExample.recipes.map((recipe) => {
		return <RecipeCard recipe={recipe} key={recipe.id} />;
	});

	return (
		<div className='flex bg-slate-50'>
			<div className='h-full min-w-[280px] pt-[50px] pl-10'>
				<div className='mb-3'>
					<h2 className='font-serif text-base font-medium'>Type de plat</h2>

					<FormGroup>
						<FormControlLabel control={<Checkbox />} label='Entrée' />
						<FormControlLabel control={<Checkbox />} label='Apéritif' />
						<FormControlLabel control={<Checkbox />} label='Plat principal' />
						<FormControlLabel control={<Checkbox />} label='Dessert' />
						<FormControlLabel control={<Checkbox />} label='Goûter' />
						<FormControlLabel control={<Checkbox />} label='Boisson' />
						<FormControlLabel control={<Checkbox />} label='Sauce' />
					</FormGroup>
				</div>
				
				<div className='mb-3'>
					<h2 className='font-serif text-base font-medium'>Spécialité</h2>

					<FormGroup>
						<FormControlLabel control={<Checkbox />} label='Italienne' />
						<FormControlLabel control={<Checkbox />} label='Japonaise' />
						<FormControlLabel control={<Checkbox />} label='Mexicaine' />
						<FormControlLabel control={<Checkbox />} label='Végétarienne' />
					</FormGroup>
				</div>

				<div>
					<h2 className='font-serif text-base font-medium'>Temps passé en cuisine</h2>

					<FormGroup>
						<FormControlLabel control={<Checkbox />} label='< 30 min' />
						<FormControlLabel control={<Checkbox />} label='30 min - 1 h' />
						<FormControlLabel control={<Checkbox />} label='> 1 h' />
					</FormGroup>
				</div>
			</div>

			<div className='mt-10'>
				<div className='mx-[10px]'>
					<TextField
						id='search-recipe'
						name='search-recipe'
						placeholder='Chercher une recette'
						size='small'
						margin='normal'
						className='w-1/2 [&>*]:pt-2 [&>*]:pb-1 [&>*]:pl-6 border-none bg-white rounded'
						InputProps={{
							disableUnderline: true,
							endAdornment: (
								<InputAdornment position="start">
									<IconButton>
										<Search />
									</IconButton>
								</InputAdornment>
							)
						}}
					/>
				</div>
				<div className='flex flex-wrap mt-4'>{recipes}</div>
			</div>
		</div>
	);
}
