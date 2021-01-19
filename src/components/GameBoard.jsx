import React, { useEffect, useState } from 'react'
import {
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Spinner,
    CardSubtitle,
    Container,
} from 'reactstrap'
import LevelCard from './LevelCard'
import ModalScore from './ModalScore'
import style from '../css/GameBoard.module.css'
import lvl from './levels.json'
import Axios from 'axios'
import { url } from '../urls'
import Credits from './Credits'
import { useDispatch, useSelector } from 'react-redux'
import { level } from './store/actionCreators'

export default function GameBoard() {
    const dispatch = useDispatch()

    const [user, setUser] = useState({})
    const [users, setUsers] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const uuid = sessionStorage.getItem('uuid')
    const token = sessionStorage.getItem('token')
    const uuidState = useSelector((state) => state.user.uuid)
    const tokenState = useSelector((state) => state.user.token)

    const getAllInfos = async () => {
        try {
            setIsLoading(true)
            const resUser = await Axios.get(`${url}/users/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            const resUsers = await Axios.get(`${url}/users`)
            setUser(resUser.data)
            setUsers(resUsers.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllInfos()
    }, [uuid])

    if (isLoading) {
        return <Spinner />
    }
    return (
        <Container fluid className={style.wrapper}>
            <Row>
                <Col lg={{ size: 2 }} md={{ size: 4 }}>
                    <Card>
                        <CardImg top src={user.picture} alt="Card image cap" />
                        <CardBody>
                            <CardTitle
                                style={{
                                    color: 'orange',
                                    fontSize: '30px',
                                    fontWeight: 700,
                                }}
                            >
                                {user.pseudo}
                            </CardTitle>
                            <CardSubtitle
                                style={{ color: 'orange', fontSize: '30px' }}
                            >
                                Level:{' '}
                                {user.Level.name === 6
                                    ? 'MASTER'
                                    : user.Level.name}
                            </CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={{ size: 8 }} md={{ size: 4 }}>
                    <h1 style={{ color: 'orange' }}>Welcome!</h1>
                    <h3 style={{ color: 'orange' }}> Select a level</h3>
                </Col>
                <Col lg={{ size: 2 }} md={{ size: 4 }}>
                    <ModalScore users={users} />
                </Col>
            </Row>
            <Row>
                <Col></Col>
                {lvl.map((i, key1, key) => (
                    <Col
                        key={key1}
                        xs="12"
                        sm="6"
                        lg="2"
                        style={{ marginTop: '5vh' }}
                    >
                        <LevelCard
                            key={key}
                            level={i.id}
                            description={i.description}
                            id={i.id}
                            isUnlock={i.id <= user.Level.name ? false : true}
                            color={
                                i.id <= user.Level.name ? 'success' : 'danger'
                            }
                        />
                    </Col>
                ))}
                <Col></Col>
            </Row>
            <Row>
                {user.Level.name >= 6 ? (
                    <Col style={{ marginTop: '5vh' }}>
                        <Credits />
                    </Col>
                ) : (
                    ''
                )}
            </Row>
        </Container>
    )
}
