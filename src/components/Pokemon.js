import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { PokemonContext } from './Gallery'

export default function Pokemon({onShowAboutPokemon}) {

    const initPokemon = useContext(PokemonContext)
    const [pokemon, setPokemon] = useState({})
    const [image, setImage] = useState('')

    useEffect(() => {
        axios.get(initPokemon.url).then(res => {
            setPokemon(res.data)
            setImage(res.data.sprites.other.dream_world.front_default)
        })

    }, [initPokemon])

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image} className="p-2" alt={pokemon.name}/>
                <hr />
                <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <Button variant="primary" onClick={e => onShowAboutPokemon({url: initPokemon.url, image: image})}>See More</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
