import { useState, useEffect } from "react"
export default function PokemonList(){
    const [pokemons, setPokemons] = useEffect([])

    useEffect(()=>{
        async function fetchData(){
            console.log("fetchData")  
        }
        fetchData()
    }, [])
    return(
        <>
        </>
    )
}