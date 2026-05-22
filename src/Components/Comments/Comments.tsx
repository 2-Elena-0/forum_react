import {Card, Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {MyImage} from "./Image.tsx";
import {useAppSelector} from "../../Redux/store.ts";
import {Link} from "react-router";

type commentType = {
    "uid": string,
    "userUId": string,
    "userAvatar": string,
    "userName": string,
    "postUId": string,
    "body": string,
    "createdAt": string,
    "likes": number,
    "wasDeleted": boolean
}

export const Comments = ({post}: { post: string }) => {
    const [comments, setComments] = useState<commentType[]>([]);
    const updateComment = useAppSelector((state => state.show.value));

    useEffect(() => {
        axios.get(`http://localhost:5152/api/Comment/api/CommentPost/${post}`).then((res) => {
            setComments(res.data);
        })
    }, [updateComment]);

    return (
        <Container>
            {comments.map((comment, i) => (
                <Card key={i} border="info"
                      className="mb-3 d-flex flex-row-reverse display-flex align-items-center justify-content-between">
                    <div className="w-100">
                        <Card.Title>{comment.userName} - {comment?.userUId}
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>
                                {comment.body}
                            </Card.Text>
                        </Card.Body>
                    </div>
                    <Card.Body as={Link} to={"/user?uid=" + comment.userUId}>
                        <MyImage src={comment.userAvatar} height="8.5em"/>
                    </Card.Body>
                </Card>
            ))}
        </Container>)
}