import {Card, Container} from "react-bootstrap";
import {HeartFill} from "react-bootstrap-icons";
import {useEffect, useState} from "react";
import axios from "axios";
import {MyImage} from "./Image.tsx";
import {useAppSelector} from "../../Redux/store.ts";

type commentType = {
    "uid": string,
    "userUId": string,
    "postUId": string,
    "body": string,
    "createdAt": string,
    "likes": number,
    "wasDeleted": boolean
}

export const Comments = ({post} : {post: string}) => {
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
                    <div>
                        <HeartFill color="red" size={25}/>
                        <small className="ms-1 text-muted">{comment.likes}</small>
                    </div>
                    <div className="w-100">
                        <Card.Body>
                            <Card.Text>
                                {comment.body}
                            </Card.Text>
                        </Card.Body>
                    </div>
                    <MyImage src="./avatar/whos-the-baddest-hsr-character-and-why-is-it-serval-v0-z9rnvb32vj2b1.png" height="8.5em" />
                </Card>
            ))}
        </Container>)
}