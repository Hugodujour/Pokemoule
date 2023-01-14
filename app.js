const express = require('express')
const { success } = require('./helper.js')
let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000

app.get ('/', (req,res) => res.send('Hello, Express !'))

app.get('/api/pokemons/:id', (req,res) => {
	const id = parseInt(req.params.id)
	const pokemon = pokemons.find(pokemon => pokemon.id === id)
	 let message = 'Un pokémon a bien été trouvé.'
	res.json(success(message, pokemon))	
})

app.get('/api/pokemons', (req,res) => {
	let pokeNumber = pokemons.length
	let message = `La liste a bien été importée et contient ${pokeNumber} pokémons.`
	res.json(success(message, pokemons))
})



app.listen(port, () => console.log(`Notre application Node est démarée sur : http:localhost:${port}`))