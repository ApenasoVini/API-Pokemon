import React, { useEffect, useState } from 'react'

export default function Pokedex() {
    const [id, setId] = useState(1);
    const [pokemon, setPokemon] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json();
            setPokemon(data);
        } catch (error) {
            console.error(`Erro: ${error}`);
        }
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <>
            <button onClick={() => setId(id - 1)}>Anterior</button>
            <button onClick={() => setId(id + 1)}>Próximo</button>

            {
                pokemon && (
                    <div className="Pokemon">
                        <h1>Pokémon</h1>
                        <p>{pokemon.name}</p>
                        {pokemon.types.map((type, index) => (
                            <p key={index}>{type.type.name}</p>
                        ))}
                        <img src={pokemon.sprites["front_default"]} />
                    </div>
                )
            }
        </>
    )
}