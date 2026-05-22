import {StarFill} from "react-bootstrap-icons";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router";
import {useState} from "react";
import axios from "axios";

export const FavoritePost = ({favorite, post} : {favorite: number, post: string}) => {
    const uid = localStorage.getItem("uid");
    const navigate = useNavigate();

    const [favoritePost, setFavoritePost] = useState<boolean>(localStorage.getItem("favoritePosts")?.includes(post) || false)

    const addfavoritePost = async () => {
        await axios.put(`http://localhost:5152/api/User/${uid}/favorite/${post}`).then(() => {
            axios.get(`http://localhost:5152/api/User/favoritePost/${uid}`)
                .then((r) => {
                    localStorage.setItem("favoritePosts", r.data)
                    setFavoritePost(true);
                    navigate(0);
                });
        })
    }

    const removeFavoritePost = async () => {
        console.log("Removing like post");
        await axios.put(`http://localhost:5152/api/User/${uid}/removeFavorite/${post}`).then(() => {
            axios.get(`http://localhost:5152/api/User/favoritePost/${uid}`)
                .then((r) => {
                    localStorage.setItem("favoritePosts", r.data)
                    setFavoritePost(false);
                    navigate(0);
                });
        })
    }

    const changeFavoritePost = async () => {
        if (!favoritePost) await addfavoritePost();
        else await removeFavoritePost();
    }

    return (<div>
        <Button onClick={changeFavoritePost}>
            <StarFill color={favoritePost ? "orange" : "grey"} size={25}/>
        </Button>
        <p>
            <small className="ms-1 text-muted">{favorite}</small>
        </p>
    </div>)
}