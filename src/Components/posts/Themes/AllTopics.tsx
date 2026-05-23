import {Badge} from "react-bootstrap";
import {useEffect, useState} from "react";
import type {topicType} from "../../../types.ts";
import {useSearchParams} from "react-router";
import axios from "axios";

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
        {topics.map((topic, id) => (
            <Badge key={id} bg="info">{topic.title}</Badge>
        ))}
    </div>)
}