import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {CreateTopicModal} from "./Components/CreateTopicModal.tsx";
import {useAppDispatch} from "../../../Redux/store.ts";
import {handleShow} from "../../../Redux/topicModalSlice.ts";

type topic = {
    uid: string;
    title: string;
    description: string;
}

export const CreatePost = () => {
    const [inputs, setInputs] = useState(['']);
    const [topics, setTopics] = useState(['']);
    const [topicsTypes, setTopicsTypes] = useState<topic[]>([])

    const reducer = useAppDispatch();

    useEffect(() => {
        axios.get("http://localhost:5152/api/Topic").then(res => {
            setTopicsTypes(res.data);
        })
    }, []);

    const handleAddTopic = () => {
        setTopics([...topics, '']);
    };

    const handleTopicChange = (index: number, value: string) => {
        const newTopics = [...topics];
        newTopics[index] = value;
        setTopics(newTopics);
    };

    const handleAddInput = () => {
        setInputs([...inputs, '']);
    };

    const handleRemoveInput = (index: number) => {
        const x = [...inputs]
        x.splice(index, 1);
        setInputs([...x]);
    }

    const handleInputChange = (index: number, value: string) => {
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
                            <Button variant="outline-dark" onClick={() => reducer(handleShow())}>Создать свою</Button>
                            <Form.Select defaultValue={topic} onChange={(e) => handleTopicChange(index, e.target.value)}
                                         className="mb-1" aria-label="Default select example">
                                <option>Выбрать тему</option>
                                {topicsTypes.map((top, ind) => (
                                    <option key={ind} value={ind}>{top.title}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    ))}
                </Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control placeholder="Название поста"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="содержание" rows={10}/>
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Multiple files input example</Form.Label>
                    <Form.Control className="mb-1" type="file" multiple/>
                    {inputs.map((input, index) => (
                        <Row className="mb-1" key={index}>
                            <Col>
                                <InputGroup>
                                    {index != inputs.length - 1 ? (
                                        <Button onClick={() => handleRemoveInput(index)} variant="outline-danger"
                                                id="button-addon1">
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
            <CreateTopicModal />
        </Container>)
}