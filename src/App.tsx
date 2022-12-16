import React, { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"
import PokemonCollection from "./components/PokemonCollection"
import { Pokemon } from "./interface"

interface Pokemons {
    name: string
    url: string
}

const App: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string>("")


        const getPokemon = async () => {
            const res = await axios.get(
                "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
            )

            setNextUrl(res.data.next)
            setPokemons((p) => [])
            for (const pokemon of res.data.results) {
                const poke = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
                )

                setPokemons((p) => [...p,poke.data])
            }
        }
        const getMegaRayquaza = async () => {
            const res = await axios.get(
                "https://pokeapi.co/api/v2/pokemon-form/10181/"
            )
                setPokemons((p) => [...p, res.data])
        }
    const nextPage = async () => {
        let res = await axios.get(nextUrl)

        setNextUrl(res.data.next)

        for (const pokemon of res.data.results) {
            const poke = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            )
            setPokemons((p) => [...p, poke.data])
        }
    }

    return (
        <div className="App">
            <div className="container">
                <header className="pokemon-header"> Pokemon</header>
                <PokemonCollection pokemons={pokemons} />
                {pokemons?.length === 0 && <button onClick={getMegaRayquaza}>Mega-Rayquaza</button>}
                <br/>
                <br/>
                {pokemons?.length <= 1 && <button onClick={getPokemon}>Demarrer</button>}
                <br/>
                <br/>
                {pokemons?.length >= 20 && <button onClick={nextPage}>Charger</button>}
            </div>
        </div>
    )
}

export default App