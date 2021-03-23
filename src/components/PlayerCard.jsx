import React from 'react'
import {
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap'

export default function PlayerCard({ user }) {
    return (
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
                    <CardSubtitle style={{ color: 'orange', fontSize: '30px' }}>
                        Level:{' '}
                        {user.Level.name === 6 ? 'MASTER' : user.Level.name}
                    </CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    )
}
