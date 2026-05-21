import {Button, Card, Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";
import {UserPost} from "../posts/UserPost.tsx";
import {MyImage} from "../Comments/Image.tsx";
import {MySpinner} from "../Comments/Spinner.tsx";
import {UserRefactor} from "../Users/Components/UserRefactor.tsx";

export const Profile = () => {
    const [name, setName] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [uid, setUid] = useState<string>("");
    const [followers, setFollowers] = useState<number>(0);

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token") && localStorage.getItem("uid")) {
            axios.get(`http://localhost:5152/api/User/${localStorage.getItem("uid")}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
                setName(res.data.name);
                setAvatar(res.data.avatarUrl);
                setDescription(res.data.description);
                setFollowers(res.data.followers);
                setUid(res.data.uid);
            }).catch(error => {
                console.log(error);
                navigate("/sign-in");
            })
        } else {
            navigate("/sign-in");
        }
    }, [])



    return (<Container>
        <h1 className="text-center">Профиль</h1>
        {name == "" ? (<MySpinner />) : (<>
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

            <UserRefactor />

            <Button variant="danger" onClick={() => navigate("/sign-in")}>
                Выйти
            </Button>

            <h3 className="text-center">Посты пользователя</h3>
            <UserPost creatorUid={uid} />
        </>)}

    </Container>)
}