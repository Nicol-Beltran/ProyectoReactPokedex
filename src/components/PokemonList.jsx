import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard"
export default function PokemonList(){
    const [pokemons, setPokemons] = useEffect([])

    useEffect(()=>{
        async function fetchData(){
            console.log("fetchData")  
        }
        fetchData()
    }, [])
    //TODO
    return(

        <>
        <h3>POKEDEX</h3>
        <div className="row g-4">
        {pokemons.map(pokemon=>{
            <PokemonCard key={pokemon.id}/>

        })}
        </div>
        </>
    )
}