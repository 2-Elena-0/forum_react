import {Button, Col, Form, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {useAppDispatch} from "../../../../Redux/store.ts";
import {handleShow} from "../../../../Redux/topicModalSlice.ts";

type topic = {
    uid: string;
    title: string;
    description: string;
}

export const AddTopics = () => {
    const [topicsTypes, setTopicsTypes] = useState<topic[]>([])
    const [topics, setTopics] = useState<string[]>(['']);

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

    return (<Row>
        <Button onClick={handleAddTopic} className="mb-1">Добавить тему</Button>
        {topics.map((topic, index) => (
            <Col key={index}>
                <Button variant="outline-dark" onClick={() => reducer(handleShow())}>Создать
                    свою</Button>
                <Form.Select defaultValue={topic}
                             onChange={(e) => handleTopicChange(index, e.target.value)}
                             className="mb-1">
                    <option>Выбрать тему</option>
                    {topicsTypes.map((top, ind) => (
                        <option key={ind} value={ind}>{top.title}</option>
                    ))}
                </Form.Select>
            </Col>
        ))}
    </Row>)
}