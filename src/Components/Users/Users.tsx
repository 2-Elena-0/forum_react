import {Col, Container, Image, Row} from "react-bootstrap";

export const Users = () => {
    return (
        <Container>
            <h1 className="text-center">Пользователи</h1>
            <Row>
                {Array.from(Array(10).keys()).map((_, index) => (
                    <Col key={index}>
                        <Image style={{height: "5em"}} className="me-1 mb-1" src="./avatar/whos-the-baddest-hsr-character-and-why-is-it-serval-v0-z9rnvb32vj2b1.png"/>
                        пользователь
                    </Col>
                ))}
            </Row>
        </Container>)
}