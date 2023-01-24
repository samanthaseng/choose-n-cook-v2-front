import React from 'react';
import { Recipe } from '../../interfaces/Recipe';
import Link from 'next/link';

export default function RecipeCard(props: { recipe: Recipe }) {
	const { name, slug, image, preparationDuration, cookingDuration } =
		props.recipe;

	return (
		<Link href={`/recipes/${slug}`}>
			<div className='overflow-hidden rounded-md cursor-pointer w-60 shadow-xl m-[10px] mb-5'>
				<div className={`bg-[url("${image ? image : '/images/default-image.jpg'}")] w-full bg-center bg-cover h-72`}></div>

				<div className='flex justify-around py-3'>
					<div className='flex items-center'>
						<img
							src="./icons/balloon-whisk.svg"
							className='w-5 mr-1'
							alt="Durée de préparation"
						/>
						<span className='font-serif text-sm uppercase'>{preparationDuration} min</span>
					</div>
					<div className='flex items-center'>
						<img
							src="./icons/kitchen-stove.svg"
							className='w-5 mr-1'
							alt="Durée de cuisson"
						/>
						<span className='font-serif text-sm uppercase'>{cookingDuration} min</span>
					</div>
				</div>
				<h2 className='font-serif font-medium text-center truncate text-stone-900'>{name}</h2>
			</div>
		</Link>
	);
}
