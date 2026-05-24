import {useEffect, useState} from "react";
import type {topicType} from "../../../types.ts";
import {useSearchParams} from "react-router";
import axios from "axios";
import {TopicMap} from "../../Components/TopicMap.tsx";

export const AllTopics = () => {
    const [topics, setTopics] = useState<topicType[]>([])
    const [searchParams] = useSearchParams();
    const query = searchParams.get("post");

    useEffect(() => {
        axios.get(`http://localhost:5152/api/Topic/getPostTopics/${query}`).then((res) => {
            setTopics(res.data);
        })
    }, [])


    return (<div className="d-flex justify-content-center gap-1">
        <TopicMap topics={topics} />
    </div>)
}