import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'

export default function OnePageSide() {
    return (
        <Container>
        <Row>
            <Col md={3}>
                <Card
                    style={{
                        width: '80%'
                    }}
                >
                    <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </CardText>
                        <Button color="success" >
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </Col>
            <Col md={3}>
                <Card
                    style={{
                        width: '80%'
                    }}
                >
                    <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </CardText>
                        <Button color="success" >
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </Col> <Col md={3}>
                <Card
                    style={{
                        width: '80%'
                    }}
                >
                    <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </CardText>
                        <Button color="success" >
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        </Container>
    )
}
