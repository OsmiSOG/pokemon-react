import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Carousel, Col, Image, ListGroup, Modal, Row, Tab, Table } from 'react-bootstrap'

export default function AboutPokemonModal({show, handleClose, handleShow, pokemonSrc}) {

    const [pokemon, setPokemon] = useState({})
    const [sprites, setSprites] = useState([])
    const [moves, setMoves] = useState([])
    const [stats, setStats] = useState([])
    const [abilities, setAbilities] = useState([])

    useEffect(() => {
        if (pokemonSrc.url !== undefined) {
            axios.get(pokemonSrc.url).then(res => {
                setPokemon(res.data)
                setSprites(res.data.sprites)
                setMoves(res.data.moves)
                setStats(res.data.stats)
                setAbilities(res.data.abilities)
            }).catch(error => {
                console.error(error);
            })
        }
    }, [pokemonSrc] )

    return (
        <Modal show={show} onHide={handleClose} size="lg" scrollable>
            <Modal.Header closeButton>
                <Modal.Title> { pokemon.name } </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#general">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#general">
                                general
                            </ListGroup.Item>
                            <ListGroup.Item action href="#sprites">
                                sprites
                            </ListGroup.Item>
                            <ListGroup.Item action href="#abilities">
                                abilities
                            </ListGroup.Item>
                            <ListGroup.Item action href="#moves">
                                moves
                            </ListGroup.Item>
                            <ListGroup.Item action href="#stats">
                                stats
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#general">
                                <Row>
                                    <Col>
                                        <p><b>name: </b> {pokemon.name} </p>
                                        <p><b>Height: </b> {pokemon.height} </p>
                                        <p><b>Weight: </b> {pokemon.weight} </p>
                                        <p><b>base experience: </b> {pokemon.base_experience} </p>
                                    </Col>
                                    <Col>
                                        <Image src={pokemonSrc.image} fluid></Image>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#sprites">
                                <Carousel variant="dark">
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={sprites.back_default} alt="spritie back default"/>
                                        <Carousel.Caption>
                                        <h3>back default</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={sprites.back_female} alt="sprite back female"/>
                                        <Carousel.Caption>
                                        <h3>back female</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={sprites.back_shiny} alt="sprite back shiny"/>
                                        <Carousel.Caption>
                                        <h3>back shiny</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={sprites.back_shiny_female} alt="sprite back shiny female"/>
                                        <Carousel.Caption>
                                        <h3>back shiny female</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={sprites.back_default} alt="sprite front_default"/>
                                        <Carousel.Caption>
                                        <h3>front default</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={sprites.front_female} alt="sprite front female"/>
                                        <Carousel.Caption>
                                        <h3>front female</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={sprites.front_shiny} alt="sprite front shiny"/>
                                        <Carousel.Caption>
                                        <h3>front shiny</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={sprites.front_shiny_female} alt="sprite front shiny female"/>
                                        <Carousel.Caption>
                                        <h3>front shiny female</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#abilities">
                                {
                                    abilities.map((ability, index) => {
                                        return (
                                            <div className="rounded border shadow p-3 my-2" key={index}>
                                                <p><b> name: </b> {ability.ability.name} </p>
                                                <p><b> is Hiden: </b> {ability.is_hidden ? 'Yes' : 'No'} </p>
                                            </div>
                                        );
                                    })
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="#moves">
                                <ListGroup variant="flush" as="ol" numbered>
                                {
                                    moves.map((move, index) => <ListGroup.Item as="li" key={index}> {move.move.name} </ListGroup.Item> )
                                }
                                </ListGroup>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#stats">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>name</th>
                                            <th>base stat</th>
                                            <th>effort</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            stats.map((stat, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index}</td>
                                                        <td>{stat.stat.name}</td>
                                                        <td>{stat.base_stat}</td>
                                                        <td>{stat.effort}</td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
