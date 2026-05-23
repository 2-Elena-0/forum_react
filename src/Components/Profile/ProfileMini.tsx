import {Card} from "react-bootstrap";
import {MyImage} from "../Comments/Image.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router";
import type {userType} from "../../types.ts";

export const ProfileMini = ({uid}: { uid: string }) => {
    const [user, setUser] = useState<userType>();

    useEffect(() => {
        if (uid) {
            axios.get(`http://localhost:5152/api/User/${uid}`).then((res) => {
                setUser(res.data);
                console.log(res.data);
            })
        }
    }, [uid])

    return (
        <>
            {user ? (
                    <Card
                        className="border-0 mb-3 d-flex flex-row-reverse display-flex align-items-center justify-content-between">
                        <div className="w-100">
                            <Card.Body><p className="ms-1">{user.name} - {user.uid}</p></Card.Body>
                        </div>
                        <Card.Body as={Link} to={`/user?uid=${user.uid}`}>
                            <MyImage src={user.avatarUrl}
                                     height="3.5em"/>
                        </Card.Body>
                    </Card>)
                : (<p>Произошла ошибка при поптыке найти автора</p>)}
        </>
    )
}