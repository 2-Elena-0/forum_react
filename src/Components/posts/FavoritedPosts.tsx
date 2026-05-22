import {useEffect, useState} from "react";
import type {postType} from "../Components/UserPost.tsx";
import axios from "axios";
import {Container} from "react-bootstrap";
import {PostMap} from "../Components/PostMap.tsx";

export const FavoritedPosts = () => {
    const [posts, setPosts] = useState<postType[]>([]);

    useEffect(() => {
        const user = localStorage.getItem("uid");
        if (user) {
            axios.get(`http://localhost:5152/api/User/favoritePostFull/${user}`).then((res) => {
                setPosts(res.data);
            })
        }
    }, [])

    return (<Container>
        <h1 className="text-center">Сохранённые посты</h1>
        <PostMap posts={posts} />
    </Container>)
}