import {Button, Container, Form} from "react-bootstrap";
import {useNavigate} from "react-router";
import * as React from "react";
import axios from "axios";

export const SignIn = () => {
    const navigate = useNavigate();

    const formCheck = async (e : React.SyntheticEvent): Promise<void> => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: {value: string},
            password: {value: string}
        }

        await axios.post("http://localhost:5152/api/User/login", {
            email: target.email.value,
            password: target.password.value,
        }).then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("uid", res.data.uid);
            console.log(res);
            navigate("/profile")
        }).catch(err => {
            console.log(err);
        })
    }

    return (<Container>
        <h1 className="text-center">Войти</h1>
        <Form onSubmit={formCheck}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Почта</Form.Label>
                <Form.Control type="email"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password"/>
            </Form.Group>

            <div className="text-center">
                <Button className="mb-4" type="submit">
                    Войти
                </Button>
                <div>
                    <div className="text-center">Нет аккаунта?</div>
                    <Button variant="info" onClick={() => navigate("/sign-up")}>Зарегистрироваться</Button>
                </div>
            </div>
        </Form>
    </Container>)
}