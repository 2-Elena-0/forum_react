import {Card, Container, Image} from "react-bootstrap";
import {HeartFill} from "react-bootstrap-icons";

export const Comments = () => {
    return (
        <Container>
            {Array.from(Array(10).keys()).map((_, i) => (
                <Card key={i} border="info"
                      className="mb-3 d-flex flex-row-reverse display-flex align-items-center justify-content-between">
                    <div>
                        <HeartFill color="red" size={25}/>
                        <small className="ms-1 text-muted">246</small>
                    </div>
                    <div className="w-100">
                        <Card.Body>
                            <Card.Text>
                                Всё больше и больше людей переходят с кофе на чай
                            </Card.Text>
                        </Card.Body>
                    </div>
                    <Image style={{height: "8.5em"}}
                           src="./avatar/whos-the-baddest-hsr-character-and-why-is-it-serval-v0-z9rnvb32vj2b1.png"/>
                </Card>
            ))}
        </Container>)
}