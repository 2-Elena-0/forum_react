import {Button, Card, Container, Form, Image, Modal} from "react-bootstrap";
import {useState} from "react";
import {Link} from "react-router";
import {HeartFill, StarFill} from "react-bootstrap-icons";

export const Profile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (<Container>
        <h1 className="text-center">Профиль</h1>
        <Card className="border-0">
            <Card.Body className="d-lg-flex display-lg-flex justify-content-between">
                <div>
                    <Image className="me-2 border border-secondary" style={{height: "15em", width: "15em"}}
                           src="./avatar/whos-the-baddest-hsr-character-and-why-is-it-serval-v0-z9rnvb32vj2b1.png"/>
                    <div className="d-flex display-flex justify-content-between">
                        <p>128 подписчиков</p>
                        <p>40 подаписок</p>
                    </div>
                </div>
                <div className="w-100">
                    <Card.Title>Имя пользователя - <small
                        className="ms-1 text-muted">6e8f4e02-c91c-465f-b22d-7f102fca381b</small></Card.Title>
                    <Card.Text>Описание</Card.Text>
                </div>
            </Card.Body>
        </Card>
        <Button variant="primary" onClick={handleShow}>
            Настройки
        </Button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Настройки</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Новое имя</Form.Label>
                        <Form.Control defaultValue="Старое имя"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Новое описание</Form.Label>
                        <Form.Control as="textarea" defaultValue="текущее описание" rows={3}/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Новое изображение</Form.Label>
                        <Form.Control accept="image/*" type="file"/>
                        <Form.Control placeholder="Либо ссылка на зиображение"/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button type="submit" variant="primary">Сохранить изменения</Button>
                </Modal.Footer>
            </Form>
        </Modal>
        <h3 className="text-center">Посты пользователя</h3>
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