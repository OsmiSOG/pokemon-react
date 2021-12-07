import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Col, Row } from 'react-bootstrap';
import Pokemon from './Pokemon';
import Paginate from './Paginate';
import AboutPokemonModal from './AboutPokemonModal';

export const PokemonContext = React.createContext()

export default function Gallery() {
    const [pages, setPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemons, setPokemons] = useState([]);
    const [show, setShow] = useState(false);
    const [pokemonSrc, setPokemonSrc] = useState({})

    const limit = 10;

    useEffect(() => {
        const offset = currentPage*limit-limit
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`).then(res => {
            setPages( Math.ceil(res.data.count/limit, offset) )
            setPokemons(res.data.results)
        })
    }, [currentPage])

    const changePage = newPage => { setCurrentPage(newPage) }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowPokemon = (pokemon) => {
        setPokemonSrc(pokemon)
        setShow(true)
    };

    return (
        <div>
            <Row xs={1} md={5} className="g-4">
                {pokemons.map((pokemon, index) => (
                    <Col key={index}>
                        <PokemonContext.Provider value={pokemon}>
                            <Pokemon onShowAboutPokemon={handleShowPokemon}/>
                        </PokemonContext.Provider>
                    </Col>
                ))}
            </Row>
            <Paginate pages={pages} currentPage={currentPage} onCurrentPage={changePage}/>
            <AboutPokemonModal show={show} handleClose={handleClose} handleShow={handleShow} pokemonSrc={pokemonSrc}/>
        </div>
    )
}
