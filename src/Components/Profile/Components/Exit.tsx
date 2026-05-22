import {Button} from "react-bootstrap";
import {useNavigate} from "react-router";
import axios from "axios";

export const Exit = () => {
    const navigate = useNavigate();

    const exit = async () => {
       localStorage.clear();
        navigate("/sign-in")
       await axios.get("http://localhost:5152/api/User/exit");
    }

    return (
        <Button variant="danger" onClick={exit}>
            Выйти
        </Button>
    )
}