import {Card, Container, Image} from "react-bootstrap";
import {HeartFill, StarFill} from "react-bootstrap-icons";
import {Link} from "react-router";

export const Posts = () => {
    return (
        <Container>
            <h1 className={"text-center"}>Лента</h1>
            {Array.from(Array(10).keys()).map((_, i) => (
                <Card as={Link} to="/post" key={i} border="info" className="text-decoration-none mb-3 d-flex flex-row-reverse display-flex align-items-center justify-content-between">
                    <Image style={{height: "8.5em"}} src="./avatar/whos-the-baddest-hsr-character-and-why-is-it-serval-v0-z9rnvb32vj2b1.png"/>
                    <div className="w-100">
                        <Card.Body>
                            <Card.Title>Чай захватил мир</Card.Title>
                            <Card.Text>
                                Всё больше и больше людей переходят с кофе на чай
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <HeartFill color="red" size={25}/>
                            <small className="ms-1 text-muted">246</small>
                            <StarFill className="ms-3 mb-1" color="orange" size={25}/>
                            <small className="ms-1 text-muted">98</small>
                        </Card.Footer>
                    </div>
                </Card>
            ))}

        </Container>)
}