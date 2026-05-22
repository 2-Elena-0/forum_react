import {Button, Container, Form} from "react-bootstrap";
import {CreateTopicModal} from "./Components/CreateTopicModal.tsx";
import {LinksInput} from "./Components/LinksInput.tsx";
import {useAppDispatch, useAppSelector} from "../../../Redux/store.ts";
import axios from "axios";
import {useNavigate} from "react-router";
import {Clear} from "../../../Redux/LinkSlice.ts";


export const CreatePost = () => {
    const links = useAppSelector(state => state.links.value);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const formCheck = async (e: React.SyntheticEvent): Promise<void> => {

        const user = localStorage.getItem("uid");

        if (user) {
            e.preventDefault();
            const target = e.target as typeof e.target & {
                title: {value: string },
                body: { value: string },
            }

            console.log(target.title.value, target.body.value);
            console.log(links);

            const images = [...links].filter(x => x != "");
            await axios.post("http://localhost:5152/api/Post", {
                name: target.title.value,
                body: target.body.value,
                images: images,
                userUId: user,
            }).then((res) => {
                dispatch(Clear());
                navigate(`/post?post=${res.data.uid}`);
            })
        }
    }

    return (
        <Container>
            <h1 className="text-center">Создать пост</h1>
            <Form onSubmit={formCheck}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Control placeholder="Название поста"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="body">
                    <Form.Control as="textarea" placeholder="содержание" rows={10}/>
                </Form.Group>

                <LinksInput />

                <Button variant="primary" type="submit">Отправить</Button>
            </Form>
            <CreateTopicModal/>
        </Container>)
}