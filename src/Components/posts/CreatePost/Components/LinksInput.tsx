import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../../../Redux/store.ts";
import {AddLink, ChangeLink, RemoveLink} from "../../../../Redux/LinkSlice.ts";

export const LinksInput = () => {
    const inputs = useAppSelector(state => state.links.value);
    const dispatch = useAppDispatch();

    return (<>
        {inputs.map((input, index) => (
            <Row className="mb-1" key={index}>
                <Col>
                    <InputGroup>
                        {index != inputs.length - 1 ? (
                            <Button onClick={() => dispatch(RemoveLink(index))} variant="outline-danger"
                                    id="button-addon1">
                                Убрать
                            </Button>
                        ) : (
                            <Button onClick={() => dispatch(AddLink())} variant="outline-success"
                                    id="button-addon1">
                                Добавить
                            </Button>
                        )}

                        <InputGroup.Text>Ссылка {index + 1}</InputGroup.Text>
                        <Form.Control
                            type="text"
                            value={input}
                            onChange={(e) => dispatch(ChangeLink({
                                index: index,
                                val: e.target.value
                            }))}
                            placeholder="Изображение ссылкой"
                        />
                    </InputGroup>
                </Col>
            </Row>
        ))}
    </>)
}