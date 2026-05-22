import {Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {MyImage} from "../Comments/Image.tsx";

type user = {
    uid: string,
    name: string,
    email: string,
    description: string,
    avatarUrl: string,
    createdAt: string,
    followersCount: number,
    role: string,
    roleGet: string
}

export const Users = () => {
    const [users, setUsers] = useState<user[]>([]);

    useEffect(() => {
        axios.get("http://localhost:5152/api/User").then((res) => {
            setUsers(res.data);
        })
    }, []);

    return (
        <Container>
            <h1 className="text-center">Пользователи</h1>
            <Row>
                {users.map((user, index) => (
                    <Col key={index}>
                        <MyImage src={user.avatarUrl} height="5em" width="5em" classN={"border border-secondary me-1 mb-1"}/>
                        {user.name}
                    </Col>
                ))}
            </Row>
        </Container>)
}