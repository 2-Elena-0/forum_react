import {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import axios from "axios";
import {MySpinner} from "../Comments/Spinner.tsx";
import {PostMap} from "./PostMap.tsx";
import {useAppSelector} from "../../Redux/store.ts";

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
    const filters = useAppSelector(state => state.filters.value);

    useEffect(() => {
        axios.get(`http://localhost:5152/api/Post/${creatorUid}`).then(res => {
            const myPosts : postType[] = res.data;
            setPosts(myPosts.filter(x => x.name.toLowerCase().includes(filters)));
        })
    }, [filters]);

    return (<Container>
        {posts.length == 0 ? (<MySpinner/>) : (<>
            <PostMap posts={posts}/>
        </>)}
    </Container>)
}