import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {MyImage} from "../Comments/Image.tsx";
import {Link} from "react-router";
import type {userType} from "../../types.ts";



export const Users = () => {
    const [users, setUsers] = useState<userType[]>([]);
    const [findUser, setFindUser] = useState<string>("");

    useEffect(() => {
        axios.get("http://localhost:5152/api/User").then((res) => {
            setUsers([...res.data].filter(x => x.name.includes(findUser)));
        })
    }, [findUser]);

    return (
        <Container>
            <h1 className="text-center">Пользователи</h1>

            <div className="d-flex w-100 mb-5">
                <Form.Control
                    type="search"
                    placeholder="Найти пользователя"
                    aria-label="Search"
                    className="me-1 justify-content-center d-flex"
                    onChange={(e) => {
                        setFindUser(e.target.value);
                    }}
                    value={findUser}
                />
                <Button onClick={() => setFindUser("")}>Очистить</Button>
            </div>

            <Row className="text-center">
                {users.map((user, index) => (
                    <Col key={index} as={Link} to={`/user?uid=${user.uid}`} className="text-decoration-none text-dark">
                        <MyImage src={user.avatarUrl} height="5em" width="5em" classN={"border border-secondary me-1 mb-1"}/>
                        <p>{user.name}</p>
                    </Col>
                ))}
            </Row>
        </Container>)
}