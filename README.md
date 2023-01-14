# Pokemoule

Welcome to the Pokemon API project! This API allows users to retrieve information about various Pokemon, including their name, type, abilities, and stats.

## Getting Started

To use the Pokemon API, you will need to make a GET request to the following endpoint:

https://pokeapi.co/api/v2/pokemon/{pokemon_name}

Where `{pokemon_name}` is the name of the Pokemon you wish to retrieve information about. For example, to retrieve information about Pikachu, you would make a GET request to `https://pokeapi.co/api/v2/pokemon/pikachu`.

The API will return a JSON object containing the Pokemon's information.

## Example

To retrieve information about Pikachu, you would make the following GET request:

https://pokeapi.co/api/v2/pokemon/pikachu

The API will return the following JSON object:

{
"name": "pikachu",
"types": [
{
"type": {
"name": "electric"
}
}
],
"abilities": [
{
"ability": {
"name": "static"
}
},
{
"ability": {
"name": "lightning-rod"
}
}
],
"stats": [
{
"stat": {
"name": "hp",
"value": 35
}
},
{
"stat": {
"name": "attack",
"value": 55
}
},
{
"stat": {
"name": "defense",
"value": 40
}
},
{
"stat": {
"name": "special-attack",
"value": 50
}
},
{
"stat": {
"name": "special-defense",
"value": 50
}
},
{
"stat": {
"name": "speed",
"value": 90
}
}
]
}


## Limitations

The API is limited to the first generation of Pokemon, and the pokemon name is case-sensitive.

## Acknowledgements

This API is powered by the [PokeAPI](https://pokeapi.co/) and all the data is sourced from [Pokemon Database](https://pokeapi.co/docs/v2.html)

## Disclaimer

This API is for educational and non-commercial use only. Pokemon is a trademark of Nintendo, Creatures Inc. and GAME FREAK inc.

## Contribution

We welcome any contributions to improve this API, please submit a pull request.

## Author

This API was created by Hugodujour
