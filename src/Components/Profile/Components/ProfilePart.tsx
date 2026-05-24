import {Card} from "react-bootstrap";
import {MyImage} from "../../Comments/Image.tsx";
import {UserTopics} from "./UserTopics.tsx";

export const ProfilePart = ({avatar, name, uid, description}: {
    avatar: string,
    name: string,
    uid: string,
    description: string
}) => {
    return (
        <Card className="border-0">
            <UserTopics />

            <Card.Body className="d-lg-flex display-lg-flex justify-content-between">
                <MyImage src={avatar} height={"15em"} width={"15em"} classN="me-2 border border-secondary"/>
                <div className="w-100">
                    <Card.Title>{name} - <small
                        className="ms-1 text-muted">{uid}</small></Card.Title>
                    <Card.Text>{description}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}