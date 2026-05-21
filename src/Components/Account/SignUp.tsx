import {Button, Container, Form} from "react-bootstrap";
import {useNavigate} from "react-router";
import * as React from "react";
import axios from 'axios';


export const SignUp = () => {

    const navigate = useNavigate();

    const formCheck = async (e : React.SyntheticEvent) => {
        e.preventDefault();
        console.log(e)
        const target = e.target as typeof e.target & {
            name: {value: string};
            email: { value: string };
            password: { value: string };
            repassword: { value: string };
        };

        const name = target.name.value;
        const email = target.email.value;
        const password = target.password.value;
        const rePassword = target.repassword.value;

        console.log({name, email, password, rePassword});

        await axios.post(`http://localhost:5152/api/User/register`, {
            name: name,
            email: email,
            password: password,
            role: "standart",
        }).then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("uid", response.data.uid);
            navigate("/profile")
        }).catch((error) => {
            console.log(error);
        })
    }

    return (<Container>
        <h1>Зарегистрироваться</h1>

        <Form onSubmit={formCheck}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Имя аккаунта</Form.Label>
                <Form.Control name="nameAcc" required/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Почта</Form.Label>
                <Form.Control name="emailAcc" type="email" required/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Пароль</Form.Label>
                <Form.Control name="passwordAcc" type="password" required/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="repassword">
                <Form.Label>Повторите пароль</Form.Label>
                <Form.Control name="repasswordAcc" type="password" required/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <div className="text-center">
                <Button className="mb-4" type="submit">
                    Зарегистрироваться
                </Button>

                <div>
                    <div className="text-center">Уже есть аккаунт?</div>
                    <Button variant="info" onClick={() => navigate("/sign-in")}>Войти</Button>
                </div>
            </div>
        </Form>
    </Container>)
}