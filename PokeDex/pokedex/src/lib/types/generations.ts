import type { Names } from '$lib/types/commun';

export interface Generation {
	id: number
	main_region: MainRegion
	name: string
	names: Names[]
	pokemon_species: PokemonSpecy[]
}

export interface MainRegion {
	name: string
	url: string
}

export interface PokemonSpecy {
	name: string
	url: string
}