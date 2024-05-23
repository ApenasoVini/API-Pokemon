import React, { useEffect, useState } from 'react'
import Status from './Status';

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
                    <>
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
                            <section>
                                <h1>{pokemon.name}</h1>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                <Status
                                    weight={pokemon.weight}
                                    hp={pokemon.stats[0].base_stat}
                                    attack={pokemon.stats[1].base_stat}
                                    defense={pokemon.stats[2].base_stat}
                                    speed={pokemon.stats[5].base_stat}
                                />
                            </section>
                        </div>
                        <div className='Buttons'>
                            <button onClick={() => setId(id > 1 ? id - 1 : 1)}>Anterior</button>
                            <button onClick={() => setId(id + 1)}>Próximo</button>
                        </div>
                    </>
                )
            }
        </>
    )
}
