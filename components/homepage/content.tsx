import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import React from 'react';
import recipesListExample from '../../shared/jsons/recipes.json';
import RecipeCard from '../recipe/card';

export default function Content() {
	const recipes = recipesListExample.recipes.map((recipe) => {
		return <RecipeCard recipe={recipe} key={recipe.id} />;
	});

	return (
		<div className='flex'>
			<div className='h-full min-w-[280px] pt-[50px] pl-10'>
				<div className='mb-3'>
					<h2 className='font-serif text-base font-medium'>Type de plat</h2>

					<FormGroup>
						<FormControlLabel control={<Checkbox />} label="Entrée" />
						<FormControlLabel control={<Checkbox />} label="Apéritif" />
						<FormControlLabel control={<Checkbox />} label="Plat principal" />
						<FormControlLabel control={<Checkbox />} label="Dessert" />
						<FormControlLabel control={<Checkbox />} label="Goûter" />
						<FormControlLabel control={<Checkbox />} label="Boisson" />
						<FormControlLabel control={<Checkbox />} label="Sauce" />
					</FormGroup>
				</div>
				
				<div className='mb-3'>
					<h2 className='font-serif text-base font-medium'>Spécialité</h2>

					<FormGroup>
						<FormControlLabel control={<Checkbox />} label="Italienne" />
						<FormControlLabel control={<Checkbox />} label="Japonaise" />
						<FormControlLabel control={<Checkbox />} label="Mexicaine" />
						<FormControlLabel control={<Checkbox />} label="Végétarienne" />
					</FormGroup>
				</div>

				<div>
					<h2 className='font-serif text-base font-medium'>Temps passé en cuisine</h2>

					<FormGroup>
						<FormControlLabel control={<Checkbox />} label="< 30 min" />
						<FormControlLabel control={<Checkbox />} label="30 min - 1 h" />
						<FormControlLabel control={<Checkbox />} label="> 1 h" />
					</FormGroup>
				</div>
			</div>

			<div className="flex flex-wrap justify-start px-6 py-10">{recipes}</div>
		</div>
	);
}
