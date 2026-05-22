import {HeartFill} from "react-bootstrap-icons";
import axios from "axios";
import {useNavigate} from "react-router";
import {Button} from "react-bootstrap";
import {useState} from "react";

export const LikePost = ({likes, post}: { likes: number, post: string }) => {
    const uid = localStorage.getItem("uid");
    const navigate = useNavigate();

    const [likePosts, setLikePosts] = useState<boolean>(localStorage.getItem("likePosts")?.includes(post) || false)

    const likePost = async () => {
        console.log("likePost");
        await axios.put(`http://localhost:5152/api/User/${uid}/like/${post}`).then(() => {
            axios.get(`http://localhost:5152/api/User/likePost/${uid}`)
                .then((r) => {
                    localStorage.setItem("likePosts", r.data)
                    setLikePosts(true);
                    navigate(0);
                });
        })
    }

    const removeLikePost = async () => {
        console.log("Removing like post");
        await axios.put(`http://localhost:5152/api/User/${uid}/removeLike/${post}`).then(() => {
            axios.get(`http://localhost:5152/api/User/likePost/${uid}`)
                .then((r) => {
                    localStorage.setItem("likePosts", r.data)
                    setLikePosts(false);
                    navigate(0);
                });
        })
    }

    const changeLikePost = async () => {
        if (!likePosts) await likePost();
        else await removeLikePost();
    }

    return (<div>
        <Button onClick={changeLikePost}>
            <HeartFill color={likePosts ? "red" : "grey"} size={25}/>
        </Button>
        <p>
            <small className="ms-1 text-muted">{likes}</small>
        </p>
    </div>)
}