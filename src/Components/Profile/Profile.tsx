import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";
import {UserPost} from "../Components/UserPost.tsx";
import {MySpinner} from "../Comments/Spinner.tsx";
import {UserRefactor} from "../Users/Components/UserRefactor.tsx";
import {Exit} from "./Components/Exit.tsx";
import {ProfilePart} from "./Components/ProfilePart.tsx";
import {useDispatch} from "react-redux";
import {clearFilter} from "../../Redux/FilterSlice.ts";

export const Profile = () => {
    const [name, setName] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [uid, setUid] = useState<string>("");
    const [followers, setFollowers] = useState<number>(0);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("token") && localStorage.getItem("uid")) {
            dispatch(clearFilter());

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

                axios.get(`http://localhost:5152/api/User/likePost/${res.data.uid}`)
                    .then((r) => localStorage.setItem("likePosts", r.data));
                axios.get(`http://localhost:5152/api/User/favoritePost/${res.data.uid}`)
                    .then((r) => localStorage.setItem("favoritePosts", r.data));

                console.log(localStorage.getItem("likePosts"));

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
        {name == "" ? (<MySpinner/>) : (<>
            <ProfilePart avatar={avatar} followers={followers} name={name} uid={uid} description={description}/>

            <UserRefactor name={name} description={description} uid={uid} image={avatar}/>

            <Exit/>

            <h3 className="text-center">Посты пользователя</h3>
            <UserPost creatorUid={uid}/>
        </>)}

    </Container>)
}