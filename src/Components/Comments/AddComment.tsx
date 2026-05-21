import {Button, Container, Form} from "react-bootstrap";

export const AddComment = () => {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Оставить комментарий</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>
                <Button className="mb-3" variant="primary" type="submit">Отправить</Button>
            </Form>
        </Container>
    )
}