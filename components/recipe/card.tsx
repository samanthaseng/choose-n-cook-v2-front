import React from 'react';
import { Recipe } from '../../interfaces/Recipe';
import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core';
import Link from 'next/link';

export default function RecipeCard(props: { recipe: Recipe }) {
	const { name, slug, image, preparationDuration, cookingDuration } =
		props.recipe;

	return (
		<Link href={`/recipes/${slug}`}>
			<Card className="w-[250px] m-[10px] mb-5 cursor-pointer">
				<CardMedia
					component="img"
					image={image ?? '/images/default-image.jpg'}
					alt={name}
					className="h-[300px]"
				/>

				<CardContent className="flex justify-around pb-0 font-serif text-sm uppercase">
					<div className="flex items-center">
						<img
							src="./icons/balloon-whisk.svg"
							className="w-5 mr-[5px]"
							alt="Durée de préparation"
						/>
						<span>{preparationDuration} min</span>
					</div>
					<div className="flex items-center">
						<img
							src="./icons/kitchen-stove.svg"
							className="w-5 mr-[5px]"
							alt="Durée de cuisson"
						/>
						<span>{cookingDuration} min</span>
					</div>
				</CardContent>

				<CardHeader title={name} className="[&_span]:font-serif [&_span]:font-medium [&_span]:truncate [&_span]:text-center [&_span]:text-base" />
			</Card>
		</Link>
	);
}
