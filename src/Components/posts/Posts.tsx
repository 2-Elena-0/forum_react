import {Container} from "react-bootstrap";
import {UserPost} from "./UserPost.tsx";

export const Posts = () => {
    return (
        <Container>
            <h1 className={"text-center"}>Лента</h1>
            <UserPost />
        </Container>)
}