import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

export const CreateTopic = () => {
    const [showNewTopic, setShowNewTopic] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleCloseNewTopic = () => setShowNewTopic(false);
    const handleShowNewTopic = () => setShowNewTopic(true);

    const saveTopic = () => {
        axios.post("http://localhost:5152/api/Topic", {
            name: name,
            description: description,
        }).then(() => {
            handleCloseNewTopic();
        })
    }

    return (<>
        <Button className="mb-2 text-center" onClick={handleShowNewTopic}>Создать новую тему</Button>

        <Modal show={showNewTopic} onHide={handleCloseNewTopic}>
            <Modal.Body>
                <Form.Control
                    id="topic"
                    className="mb-2"
                    placeholder="Название"
                    onChange={(e) => {setName(e.target.value)}}
                    value={name}
                />
                <Form.Control
                    id="description"
                    placeholder="Описание"
                    onChange={(e) => {setDescription(e.target.value)}}
                    value={description}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={saveTopic}>Создать</Button>
            </Modal.Footer>
        </Modal>
    </>)
}