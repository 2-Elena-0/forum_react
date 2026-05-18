import {Button, Card, Carousel, Container, Form, Image} from "react-bootstrap";
import {HeartFill, StarFill} from "react-bootstrap-icons";
import {useState} from "react";

export const Post = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex : number) => {
        setIndex(selectedIndex);
    };
    return (
        <Container>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Image className="w-100 img-fluid"
                         src="https://richard-tea.com/upload/delight.webpconverter/upload/iblock/0fd/0g01n4rglqk27pt65dlgzdfa6df5o7yj/shutterstock_2139939275.jpg.webp?173437319867942"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="w-100 img-fluid"
                         src="https://www.tea-coffee.ru/teaimages/postimg/images/zavarochnyi%20_chajnik.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="w-100 img-fluid"
                           src="https://therapy.school/upload/weimg_cache/9a8/9a8e6b2ce2fb87507c57f66728aef9bb/19.11.jpg"/>
                </Carousel.Item>
            </Carousel>
            <h1 className="text-center">Какое-то название поста</h1>
            <div className="text-center">
                <p>какой-то текст</p>
                <p>какой-то текст</p>
                <p>какой-то текст</p>
                <p>какой-то текст</p>
                <p>какой-то текст</p>
                <p>какой-то текст</p>
                <p>какой-то текст</p>
                <div>
                    <HeartFill color="red" size={25}/>
                    <small className="ms-1 text-muted">246</small>
                    <StarFill className="ms-3 mb-1" color="orange" size={25}/>
                    <small className="ms-1 text-muted">98</small>
                </div>
            </div>
            <h3 className="m-3 text-center">Комментарии</h3>
            <Form>
                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>
                <Button className="mb-3" variant="primary" type="submit">Отправить</Button>
            </Form>

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