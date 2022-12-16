import React from "react"
import {Pokemon} from "../interface"
import "./pokemon.css"
import PokemonList from "./PokemonList"

interface Props {
    pokemons: Pokemon[]
}



export const PokemonColection: React.FC<Props> = (props) => {
    const {pokemons} = props

    return (
        <>
            <section className="collection-container">
                {pokemons.map((pokemon) => {
                    return (
                        <PokemonList
                            key={pokemon.id}
                            name={pokemon.name}
                            id={pokemon.id}
                            image={pokemon.sprites.front_default}
                            image_shiny={pokemon.sprites.front_shiny}
                            type={pokemon.types[0].type.name}
                        />

                    )
                })}
            </section>
        </>
    )
}

export default PokemonColection