import {Button, Form, Modal} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../../../Redux/store.ts";
import {handleClose} from "../../../../Redux/topicModalSlice.ts";

export const CreateTopicModal = () => {
    const show = useAppSelector(state => state.show.value);
    const reducer = useAppDispatch();

    return (
        <Modal show={show} onHide={() => reducer(handleClose())}>
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
                    <Button variant="secondary" onClick={() => reducer(handleClose())}>
                        Закрыть
                    </Button>
                    <Button type="submit" variant="primary" onClick={() => reducer(handleClose())}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}