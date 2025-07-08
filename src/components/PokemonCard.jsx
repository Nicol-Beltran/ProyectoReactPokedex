export default function PokemonCard({pokemon}){
    console.log(pokemon)
    return(
        <div className="card text-center">
            {/* {console.log(pokemon[0].name)} */}
            <img className="card-img-top p-3" src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <h3>{pokemon.name}</h3>
            <p>ID: {pokemon.id}</p>
        </div>
    )
}