import {Button, Col, Container, Form, InputGroup, Modal, Row} from "react-bootstrap";
import {useState} from "react";

export const CreatePost = () => {
    const [inputs, setInputs] = useState(['']);
    const [topics, setTopics] = useState(['']);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddTopic = () => {
        setTopics([...topics, '']);
    };

    const handleTopicChange = (index : number, value : string) => {
        const newTopics = [...topics];
        newTopics[index] = value;
        setTopics(newTopics);
    };

    const handleAddInput = () => {
        setInputs([...inputs, '']);
    };

    const handleRemoveInput = (index : number) => {
        const x = [...inputs]
        x.splice(index, 1);
        setInputs([...x]);
    }

    const handleInputChange = (index : number, value : string) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };
    return (
        <Container>
            <h1 className="text-center">Создать пост</h1>
            <Form>
                <Button onClick={handleAddTopic} className="mb-1">Добавить тему</Button>
                <Row>
                    {topics.map((topic, index) => (
                        <Col key={index}>
                            <Button variant="outline-dark" onClick={handleShow}>Создать свою</Button>
                            <Form.Select defaultValue={topic} onChange={(e) => handleTopicChange(index, e.target.value)} className="mb-1" aria-label="Default select example">
                                <option>Выбрать тему</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    ))}
                </Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control placeholder="Название поста" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="содержание" rows={10} />
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Multiple files input example</Form.Label>
                    <Form.Control className="mb-1" type="file" multiple/>
                    {inputs.map((input, index) => (
                        <Row className="mb-1" key={index}>
                            <Col>
                                <InputGroup>
                                    {index != inputs.length - 1 ? (
                                        <Button onClick={() => handleRemoveInput(index)} variant="outline-danger" id="button-addon1">
                                            Убрать
                                        </Button>
                                    ) : (
                                        <Button onClick={handleAddInput} variant="outline-success" id="button-addon1">
                                            Добавить
                                        </Button>
                                    )}

                                    <InputGroup.Text>Ссылка {index + 1}</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        value={input}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                        placeholder="Изображение ссылкой"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    ))}
                </Form.Group>
                <Button variant="primary">Отправить</Button>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Своя тема</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Название темы</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Описание</Form.Label>
                            <Form.Control type="textarea"/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Закрыть
                        </Button>
                        <Button type="submit" variant="primary" onClick={handleClose}>
                            Сохранить
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Container>)
}