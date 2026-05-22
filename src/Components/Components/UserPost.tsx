import {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import axios from "axios";
import {MySpinner} from "../Comments/Spinner.tsx";
import {PostMap} from "./PostMap.tsx";

export type postType = {
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
            <PostMap posts={posts} />
        </>)}
    </Container>)
}