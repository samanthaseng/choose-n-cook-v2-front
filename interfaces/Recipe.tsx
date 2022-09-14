export type Recipe = {
	id: number;
	name: string;
	slug: string;
	// description: string | null;
	preparationDuration: number;
	cookingDuration: number;
	// portions: number;
	image: string | null;
};
