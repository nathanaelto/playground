import type { PageServerLoad } from '../../.svelte-kit/types/src/routes/$types';
import type { Region } from '$lib/types/regions';
import type { Generation, PokemonSpecy } from '$lib/types/generations';

interface RegionPageProps {
	regionId: number;
	generationId: number;
	name: string;
	pokemon_species: PokemonSpecy[];
}

export const load: PageServerLoad = async ({ fetch}) => {
	const fetchRegionResponse = await fetch('https://pokeapi.co/api/v2/region/1');
	const region: Region = await fetchRegionResponse.json();

	const fetchGenerationResponse = await fetch(region.main_generation.url);
	const generation: Generation = await fetchGenerationResponse.json();

	const pokemons = await Promise.all(generation.pokemon_species.map(async (pokemon) => {
		const fetchPokemonResponse = await fetch(pokemon.url);
		return fetchPokemonResponse.json();
	}));

	console.log(pokemons.map((pokemon) => pokemon.name));

	if (!region || !generation) {
		return {
			status: 404,
			error: new Error('Region or generation not found')
		};

	}
	const frenchName = region.names.filter(name => name.language.name === 'fr');


	return {
		regionId: region.id,
		generationId: generation.id,
		name: frenchName[0].name,
		pokemon_species: generation.pokemon_species
	};
}