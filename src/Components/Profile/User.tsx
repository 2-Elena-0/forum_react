import {useNavigate, useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import type {userType} from "../../types.ts"
import {Container} from "react-bootstrap";
import {ProfilePart} from "./Components/ProfilePart.tsx";
import {MySpinner} from "../Comments/Spinner.tsx";
import {UserPost} from "../Components/UserPost.tsx";

export const User = () => {
    const [searchParams] = useSearchParams();
    const [user, setUser] = useState<userType>();

    const query = searchParams.get("uid");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5152/api/User/${query}`).then((res) => {
            setUser(res.data);
        }).catch(() => {
            navigate("*");
        })
    }, [])

    return (
        <Container>
            <h1>Профиль пользователя</h1>

            {user ? (<>
                    <ProfilePart avatar={user.avatarUrl} name={user.name} uid={user.uid} description={user.uid}/>

                    <h3 className="text-center">Посты пользователя</h3>
                    <UserPost creatorUid={user.uid}/>
                </>)
                : (<MySpinner/>)}
        </Container>
    )
}