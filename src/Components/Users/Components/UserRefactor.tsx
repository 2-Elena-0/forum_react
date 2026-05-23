import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import * as React from "react";
import axios from "axios";
import {useNavigate} from "react-router";

export const UserRefactor = ({name, description, uid, image}: { name: string, description: string, uid: string, image: string }) => {
    const [show, setShow] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formCheck = async (e: React.SyntheticEvent): Promise<void> => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            newName: { value: string },
            newDescription: { value: string },
            newImage: { value: string },
        }

        const newImage = target.newImage.value == "" ? image : target.newImage.value;

        await axios.put(`http://localhost:5152/api/User/${uid}`, {
            name: target.newName.value,
            description: target.newDescription.value,
            avatarUrl: newImage,
        }).then((res) => {
            console.log(res);
            handleClose();
            navigate(0);
        })
    }

    return (
        <>
            <Button variant="primary" className="me-2 ms-3" onClick={handleShow}>
                Настройки
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Настройки</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formCheck}>
                        <Form.Group className="mb-3" controlId="newName">
                            <Form.Label>Новое имя</Form.Label>
                            <Form.Control defaultValue={name}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="newDescription">
                            <Form.Label>Новое описание</Form.Label>
                            <Form.Control as="textarea" defaultValue={description} rows={3}/>
                        </Form.Group>
                        <Form.Group controlId="newImage" className="mb-3">
                            <Form.Label>Новое изображение</Form.Label>
                            <Form.Control placeholder="ссылка на зиображение"/>
                        </Form.Group>
                        <Button type="submit" variant="primary">Сохранить изменения</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}