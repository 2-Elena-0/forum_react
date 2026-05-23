import {Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {MyImage} from "../Comments/Image.tsx";
import {Link} from "react-router";
import type {userType} from "../../types.ts";



export const Users = () => {
    const [users, setUsers] = useState<userType[]>([]);

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
                    <Col key={index} as={Link} to={`/user?uid=${user.uid}`} className="text-decoration-none text-dark">
                        <MyImage src={user.avatarUrl} height="5em" width="5em" classN={"border border-secondary me-1 mb-1"}/>
                        {user.name}
                    </Col>
                ))}
            </Row>
        </Container>)
}