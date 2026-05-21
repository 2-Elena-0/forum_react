import {useEffect, useState} from "react";
import {Card, Container, Image} from "react-bootstrap";
import {HeartFill, StarFill} from "react-bootstrap-icons";
import {Link} from "react-router";
import axios from "axios";
import {MySpinner} from "../Comments/Spinner.tsx";

type postType = {
    uid: string;
    name: string;
    body: string;
    likes: number;
    favorites: number;
    createdAt: string;
    userDelete: boolean;
    userUId: string;
}

export const UserPost = ({creatorUid = ""}) => {
    const [posts, setPosts] = useState<postType[]>([]);

    useEffect(() => {
        axios.get(`http://localhost:5152/api/Post/${creatorUid}`).then(res => {
            setPosts(res.data)
        })
    }, []);

    return (<Container>
        {posts.length == 0 ? (<MySpinner/>) : (<>
            {posts.map((post, i) => (
                <Card as={Link} to={"/post?post=" + post.uid} key={i} border="info"
                      className="text-decoration-none mb-3 d-flex flex-row-reverse display-flex align-items-center justify-content-between">
                    <Image style={{height: "8.5em"}}
                           src="./avatar/whos-the-baddest-hsr-character-and-why-is-it-serval-v0-z9rnvb32vj2b1.png"/>
                    <div className="w-100">
                        <Card.Body>
                            <Card.Title>{post.name}</Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <HeartFill color="red" size={25}/>
                            <small className="ms-1 text-muted">{post.likes}</small>
                            <StarFill className="ms-3 mb-1" color="orange" size={25}/>
                            <small className="ms-1 text-muted">{post.favorites}</small>
                        </Card.Footer>
                    </div>
                </Card>
            ))}
        </>)}
    </Container>)
}