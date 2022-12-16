import React, {useState} from "react"

interface Props {
    name: string
    id: number
    image: string
    image_shiny: string
    type: string
}




function PokemonList(props: Props) {
    const { name, id, image, image_shiny, type } = props

    const [isShiny, setIsShiny] = useState(false)

    const spriteSwitch = () => {
         setIsShiny(!isShiny)
    }

    return (
        <div onClick={()=> spriteSwitch()}>
            <section className={`pokemon-list-container ${type} `}>
                <p className="pokemon-name"> # {id} </p>
                <p className="pokemon-name"> {name} </p>
                <img src={isShiny ? image_shiny: image} alt={name}/>
                <p className="pokemon-name"> Type : {type} </p>
            </section>
        </div>
    )
}

export default PokemonList