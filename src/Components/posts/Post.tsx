import {Container} from "react-bootstrap";
import {HeartFill, StarFill} from "react-bootstrap-icons";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router";
import axios from "axios";
import {Comments} from "../Comments/Comments.tsx";
import {MyCarousel} from "../Components/Carousel.tsx";

export const Post = () => {
    const [searchParams] = useSearchParams();
    const [postName, setPostName] = useState<string>("");
    const [postBody, setPostBody] = useState<string>("");
    const [likes, setLikes] = useState<number>(0);
    const [favorite, setFavorite] = useState<number>(0);
    const [images, setImages] = useState<string[]>([]);


    useEffect(() => {
        const query = searchParams.get("post");
        axios.get(`http://localhost:5152/api/Post/byUid/${query}`).then(res => {
            setPostName(res.data.name);
            setPostBody(res.data.body);
            setLikes(res.data.likes);
            setFavorite(res.data.favorites);
            setImages(res.data.images);
        })
    }, [])


    return (
        <Container>
            {images.length > 0 && (<MyCarousel images={images} />)}

            <h1 className="text-center">{postName}</h1>
            <div className="text-center">
                <p>{postBody}</p>
                <div>
                    <HeartFill color="red" size={25}/>
                    <small className="ms-1 text-muted">{likes}</small>
                    <StarFill className="ms-3 mb-1" color="orange" size={25}/>
                    <small className="ms-1 text-muted">{favorite}</small>
                </div>
            </div>

            <h3 className="m-3 text-center">Комментарии</h3>
            <Comments/>
        </Container>)
}