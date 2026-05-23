import {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import axios from "axios";
import {MySpinner} from "../Comments/Spinner.tsx";
import {PostMap} from "./PostMap.tsx";
import {useAppSelector} from "../../Redux/store.ts";
import type {postType} from "../../types.ts";

export const UserPost = ({creatorUid = ""}) => {
    const [posts, setPosts] = useState<postType[]>([]);
    const [loading, setLoading] = useState(true);
    const filters = useAppSelector(state => state.filters.value);

    useEffect(() => {
        axios.get(`http://localhost:5152/api/Post/${creatorUid}`).then(res => {
            const myPosts : postType[] = res.data;
            setPosts(myPosts.filter(x => x.name.toLowerCase().includes(filters)));
            setLoading(false);
        })
    }, [filters]);

    return (<Container>
        {loading ? (<MySpinner/>) : (<>
            {posts.length == 0 ? (<h5 className="text-center">У пользователя пока нет постов</h5>) : (
                <PostMap posts={posts}/>
            )}
        </>)}
    </Container>)
}