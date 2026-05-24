import {useEffect, useState} from "react";
import type {topicType} from "../../../types.ts";
import axios from "axios";
import {Container} from "react-bootstrap";
import {TopicMap} from "../../Components/TopicMap.tsx";

export const UserTopics = () => {
    const [topics, setTopics] = useState<topicType[]>([]);

    const user = localStorage.getItem("uid");

    useEffect(() => {
        axios.get(`http://localhost:5152/api/Topic/getUserTopics/${user}`).then((res) => {
            setTopics(res.data);
        })
    }, [])

    return (<Container>
        <TopicMap topics={topics} />
    </Container>)
}