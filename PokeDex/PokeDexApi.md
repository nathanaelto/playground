# PokeDexApi

## Description 

Utilisez l'API PokeDex pour obtenir des informations sur les Pokémons.
On va indexer les informations des Pokémons dans ElasticSearch.

### Etape 1 : 
1. Créer un projet NestJs
2. Créer un repo GitHub pour ce projet
3. Créer une branche `feature/craete-dataset`
4. Créer un module `pokemon`
5. Créer un service `pokemon`
6. Créer une commande pour récupérer les informations des Pokémons et les écrires dans un fichier Json
Données à récupérer :
```
- Nom
- Types
- Id
- Url de l'image
```

/!\ Les ids vont de 1 à 1008.

### Outils 

- [NestJs](https://docs.nestjs.com/)
- [Nest commander](https://docs.nestjs.com/recipes/nest-commander)
- [OpenAPI](https://docs.nestjs.com/openapi/introduction)
- [Axios & Http Module](https://docs.nestjs.com/techniques/http-module)

> `https://pokeapi.co/api/v2/pokemon-species/{PokemonId}`