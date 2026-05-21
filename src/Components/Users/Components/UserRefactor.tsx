import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

export const UserRefactor = () => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" className="me-2" onClick={handleShow}>
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
                    <Form>
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