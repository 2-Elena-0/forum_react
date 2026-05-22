import {Button, Container, Form} from "react-bootstrap";
import {LinksInput} from "./Components/LinksInput.tsx";
import {CreateTopicModal} from "./Components/CreateTopicModal.tsx";
import {useAppDispatch, useAppSelector} from "../../../Redux/store.ts";
import {useNavigate, useSearchParams} from "react-router";
import axios from "axios";
import {Clear, SetLinks} from "../../../Redux/LinkSlice.ts";
import {useEffect, useState} from "react";
import * as React from "react";

export const UpdatePost = () => {
    const [searchParams] = useSearchParams();
    const [postName, setPostName] = useState<string>("");
    const [postBody, setPostBody] = useState<string>("");
    const links = useAppSelector(state => state.links.value);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const query = searchParams.get("post");
    const user = localStorage.getItem("uid");

    useEffect(() => {
        if (query) {
            axios.get(`http://localhost:5152/api/Post/byUid/${query}`).then(res => {
                setPostName(res.data.name);
                setPostBody(res.data.body);
                dispatch(SetLinks(res.data.images));
            })
        } else {
            navigate("/")
        }
    }, [])

    const formCheck = async (e: React.SyntheticEvent): Promise<void> => {
        if (query && user) {
            e.preventDefault();
            const target = e.target as typeof e.target & {
                title: { value: string },
                body: { value: string },
            }

            const images = [...links].filter(x => x != "");
            await axios.put(`http://localhost:5152/api/Post/${query}`, {
                name: target.title.value,
                body: target.body.value,
                images: images,
            }).then((res) => {
                dispatch(Clear());
                navigate(`/post?post=${res.data.uid}`);
            })
        }
    }

    return (<Container>
        <h1 className="text-center">Обновить пост</h1>
        <Form onSubmit={formCheck}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Название поста</Form.Label>
                <Form.Control defaultValue={postName}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="body">
                <Form.Label>содержание</Form.Label>
                <Form.Control as="textarea" defaultValue={postBody} rows={10}/>
            </Form.Group>

            <LinksInput/>

            <Button variant="primary" type="submit">Отправить</Button>
        </Form>
        <CreateTopicModal/>
    </Container>)
}