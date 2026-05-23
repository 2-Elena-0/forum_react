import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import type {postType} from "../../types.ts";
import axios from "axios";
import {PostMap} from "../Components/PostMap.tsx";

export const LikedPosts = () => {
    const [posts, setPosts] = useState<postType[]>([]);

    useEffect(() => {
        const user = localStorage.getItem("uid");
        if (user) {
            axios.get(`http://localhost:5152/api/User/likePostFull/${user}`).then((res) => {
                setPosts(res.data);
            })
        }
    }, [])

    return (<Container>
        <h1 className="text-center">Понравившиеся посты</h1>
        <PostMap posts={posts} />
    </Container>)
}