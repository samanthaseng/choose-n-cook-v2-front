import React from 'react';
import recipesListExample from '../../shared/jsons/recipes.json';
import RecipeCard from '../recipe/card';

export default function Content() {
	const recipes = recipesListExample.recipes.map((recipe) => {
		return <RecipeCard recipe={recipe} />;
	});

	return (
		<div className="flex flex-wrap justify-center px-6 py-10">{recipes}</div>
	);
}
