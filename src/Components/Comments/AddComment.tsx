import {Button, Container, Form} from "react-bootstrap";
import * as React from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import {useAppDispatch} from "../../Redux/store.ts";
import {changeValue} from "../../Redux/updateSlice.tsx";

export const AddComment = ({postUid} : {postUid: string}) => {

    const navigate = useNavigate();
    const reduce = useAppDispatch();

    const formCheck = async (e : React.SyntheticEvent): Promise<void> => {
        const user = localStorage.getItem("uid");
        if (user) {
            e.preventDefault();
            const target = e.target  as typeof e.target & {
                body: {value: string},
            }

            await axios.post("http://localhost:5152/api/Comment", {
                postId: postUid,
                body: target.body.value,
                userUId: user
            }).then(() => {
                reduce(changeValue())
            })
        } else {
            navigate("/login");
        }
    }

    return (
        <Container>
            <Form onSubmit={formCheck}>
                <Form.Group className="mb-1" controlId="body">
                    <Form.Label>Оставить комментарий</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>
                <Button className="mb-3" variant="primary" type="submit">Отправить</Button>
            </Form>
        </Container>
    )
}