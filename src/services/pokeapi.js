const API_URL = "https://pokeapi.co/api/v2/"

export async function getPokemons(offset= 50) {

    for (let i = 0; i < offset; i++) {
        data = array[i];
       //TODO 
    }

    try {

        const response = await fetch(`${API_URL}/pokemon/${id}`)
        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
        return false
    }


}