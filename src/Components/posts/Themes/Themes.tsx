import {Button, Container, Form, Modal} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../../Redux/store.ts";
import {handleClose} from "../../../Redux/topicModalSlice.ts";
import {useEffect, useState} from "react";
import {CreateTopic} from "./CreateTopic.tsx";
import axios from "axios";
import type {topicType} from "../../../types.ts";
import {useNavigate, useSearchParams} from "react-router";

export const Themes = () => {
    const [topics, setTopics] = useState<topicType[]>([])
    const [newTopic, setNewTopic] = useState<string>("");
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const query = searchParams.get("post");

    const setData = () => {
        axios.get("http://localhost:5152/api/Topic").then((res) => {
            setTopics(res.data);
            setNewTopic(res.data[0].uid);
        })
    }

    const addTopic = () => {
        axios.post(`http://localhost:5152/api/Topic/addTopic/${newTopic}/ToPost/${query}`).then(() => {
            dispatch(handleClose());
            navigate(0);
        })
    }

    useEffect(() => {
        setData()
    }, []);

    const show = useAppSelector(state => state.show.value)
    const dispatch = useAppDispatch()

    return (<Container>
        <Modal
            show={show}
            onHide={() => dispatch(handleClose())}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавить тему</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><Button variant="outline-primary" onClick={setData}>Обновить список</Button></p>

                <CreateTopic/>

                <Form.Select onChange={(event) => setNewTopic(event.target.value)} aria-label="Default select example">
                    {topics.map((topic: topicType, idx: number) => (
                        <option key={idx} value={topic.uId}>{topic.title}</option>
                    ))}
                </Form.Select>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => dispatch(handleClose())}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={addTopic}>Добавить</Button>
            </Modal.Footer>


        </Modal>
    </Container>)
}