import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router";
import axios from "axios";
import {Comments} from "../Comments/Comments.tsx";
import {MyCarousel} from "../Components/Carousel.tsx";
import {AddComment} from "../Comments/AddComment.tsx";
import {ProfileMini} from "../Profile/ProfileMini.tsx";
import {LikePost} from "../Components/LikePost.tsx";
import {FavoritePost} from "../Components/FavoritePost.tsx";

export const Post = () => {
    const [searchParams] = useSearchParams();
    const [postName, setPostName] = useState<string>("");
    const [postBody, setPostBody] = useState<string>("");
    const [postCreator, setPostCreator] = useState<string>("");
    const [likes, setLikes] = useState<number>(0);
    const [favorite, setFavorite] = useState<number>(0);
    const [images, setImages] = useState<string[]>([]);

    const query = searchParams.get("post");
    const navigate = useNavigate();

    useEffect(() => {
        if (query) {
            axios.get(`http://localhost:5152/api/Post/byUid/${query}`).then(res => {
                setPostName(res.data.name);
                setPostBody(res.data.body);
                setLikes(res.data.likes);
                setFavorite(res.data.favorites);
                setImages(res.data.images);
                setPostCreator(res.data.userUId);
            })
        } else {
            navigate("/")
        }
    }, [])


    return (
        <Container>
            {query && (
                <>
                    {images.length > 0 && (<MyCarousel images={images}/>)}

                    <h1 className="text-center">{postName}</h1>
                    <div className="text-center">
                        <p>{postBody}</p>
                        <div className="d-flex justify-content-center gap-1">
                            <LikePost likes={likes} post={query}/>
                            <FavoritePost favorite={favorite} post={query}/>
                        </div>
                    </div>

                    <ProfileMini uid={postCreator} />

                    <h3 className="m-3 text-center">Комментарии</h3>
                    <AddComment postUid={query}/>
                    <Comments post={query}/>
                </>
            )}
        </Container>)
}