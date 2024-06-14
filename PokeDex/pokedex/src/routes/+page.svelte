<script lang="ts">
	import type { PageData } from './$types';


	export let data: PageData;
	$: ({regionId, generationId, name, pokemon_species} = data);

	$: pokemons = pokemon_species ? pokemon_species.slice(0, 20) : [];
	$: moreLoadPossible = pokemon_species && pokemons.length < pokemon_species.length;

	function loadMorePokemons() {
		if (!pokemon_species) return;
		if (pokemons.length === pokemon_species.length) return;
		pokemons = pokemon_species.slice(0, pokemons.length + 20);
	}

</script>

<h1>{name}</h1>

{#if pokemon_species}
	<ul>
		{#each pokemons as species}
			<li><a href={`/pokemon/${species.name}`}>{species.name}</a></li>
		{/each}
	</ul>
{/if}

{#if moreLoadPossible}
	<button on:click={loadMorePokemons}>Load more pokemons</button>
{/if}

