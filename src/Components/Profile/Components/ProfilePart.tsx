import {Card} from "react-bootstrap";
import {MyImage} from "../../Comments/Image.tsx";

export const ProfilePart = ({avatar, followers, name, uid, description} : {avatar : string, followers : number, name : string, uid : string, description : string}) => {
    return (
        <Card className="border-0">
            <Card.Body className="d-lg-flex display-lg-flex justify-content-between">
                <div>
                    <div className="me-2 border border-secondary">
                        <MyImage src={avatar} height={"15em"} width={"15em"} />
                    </div>
                    <div className="d-flex display-flex justify-content-between">
                        <p>{followers} подписчиков</p>
                        <p>40 подаписок</p>
                    </div>
                </div>
                <div className="w-100">
                    <Card.Title>{name} - <small
                        className="ms-1 text-muted">{uid}</small></Card.Title>
                    <Card.Text>{description}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}