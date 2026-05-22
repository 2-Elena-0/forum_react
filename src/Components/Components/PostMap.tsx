import type {postType} from "./UserPost.tsx";
import {HeartFill, StarFill} from "react-bootstrap-icons";
import {Card} from "react-bootstrap";
import {Link} from "react-router";

export const PostMap = ({posts} : {posts : postType[]}) => {
    return (<>
        {posts.map((post, i) => (
            <Card key={i} border="info"
                  className="text-decoration-none mb-3 d-flex flex-row-reverse display-flex align-items-center justify-content-between">
                <div className="w-100">
                    <div className="ms-2">
                        <Card.Body as={Link} to={"/post?post=" + post.uid} className="text-decoration-none">
                            <Card.Title>{post.name}</Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                        </Card.Body>
                    </div>
                    <Card.Footer>
                        <HeartFill color="red" size={25}/>
                        <small className="ms-1 text-muted">{post.likes}</small>
                        <StarFill className="ms-3 mb-1" color="orange" size={25}/>
                        <small className="ms-1 text-muted">{post.favorites}</small>
                    </Card.Footer>
                </div>
            </Card>
        ))}
    </>)
}