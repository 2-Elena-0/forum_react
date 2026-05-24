import {Badge} from "react-bootstrap";
import type {topicType} from "../../types.ts";

export const TopicMap = ({topics} : {topics: topicType[]}) => {
    return (<>
        {topics.map((topic, id) => (
            <Badge key={id} bg="info">{topic.title}</Badge>
        ))}
    </>)
}