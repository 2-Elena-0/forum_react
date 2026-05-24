import {Button, Form, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import type {topicType} from "../../types.ts";
import axios from "axios";
import {useNavigate} from "react-router";

export const TopicForUser = () => {
    const [show, setShow] = useState(false);
    const [topics, setTopics] = useState<topicType[]>([])
    const [newTopic, setNewTopic] = useState<string>("");

    const navigate = useNavigate();
    const user = localStorage.getItem("uid");

    useEffect(() => {
        axios.get("http://localhost:5152/api/Topic").then((res) => {
            setTopics(res.data);
        })
    }, [])

    const addTopic = () => {
        axios.put(`http://localhost:5152/api/User/${user}/topic/${newTopic}`).then(() => {
            handleClose();
            navigate(0);
        })
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="me-2" variant="primary" onClick={handleShow}>Добавить тему в "интересное"</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Добавить интересную тему</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Select onChange={(event) => setNewTopic(event.target.value)} aria-label="Default select example">
                        {topics.map((topic: topicType, idx: number) => (
                            <option key={idx} value={topic.uId}>{topic.title}</option>
                        ))}
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Отмена</Button>
                    <Button variant="primary" onClick={addTopic}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}