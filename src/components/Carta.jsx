import React, { useEffect, useState } from 'react'

export default function Carta() {
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
            {
                pokemon && (
                    <div className='Carta'>
                        <nav>
                            <span>#{pokemon.id}</span>
                            <ul>
                                <li>
                                    {pokemon.types.map((type, index) => (
                                        <p key={index}>{type.type.name}</p>
                                    ))}
                                </li>
                            </ul>
                        </nav>
                        <div className='Status'>
                            <h1>{pokemon.name}</h1>
                            <img src={pokemon.sprites.front_default} />
                            <div>
                            <button onClick={() => setId(id - 1)}>Anterior</button>
                            <button onClick={() => setId(id + 1)}>Próximo</button>
                            </div>
                        </div>

                    </div>
                )
            }
        </>
    )
}