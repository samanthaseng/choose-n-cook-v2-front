import React from 'react';
import { Recipe } from '../../interfaces/Recipe';
import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core';
import styles from './card.module.css';
import Link from 'next/link';

export default function RecipeCard(props: { recipe: Recipe }) {
	const { name, slug, image, preparationDuration, cookingDuration } =
		props.recipe;

	return (
		<Link href={`/recipes/${slug}`}>
			<Card className={styles.card}>
				<CardMedia
					component="img"
					image={image ?? '/images/default-image.jpg'}
					alt={name}
					className={styles.image}
				/>

				<CardContent className={styles.durationWrapper}>
					<div className={styles.duration}>
						<img
							src="./icons/balloon-whisk.svg"
							className={styles.icon}
							alt="Durée de préparation"
						/>
						<span>{preparationDuration} min</span>
					</div>
					<div className={styles.duration}>
						<img
							src="./icons/kitchen-stove.svg"
							className={styles.icon}
							alt="Durée de cuisson"
						/>
						<span>{cookingDuration} min</span>
					</div>
				</CardContent>

				<CardHeader title={name} noWrap className={styles.header} />
			</Card>
		</Link>
	);
}
