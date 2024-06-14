import type { Names } from '$lib/types/commun';

export interface Region {
	id: number;
	main_generation: MainGeneration;
	names: Names[];
	name: string;
}

export interface MainGeneration {
	name: string;
	url: string;
}

