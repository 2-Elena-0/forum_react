import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import "../../NavStile.css"
import {Link} from "react-router";
import {FindPost} from "../Components/FindPost.tsx";

const ForumNavbar = () => {
    return (<>
        <Navbar expand="lg" className="bg-body-tertiary mb-3">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Святой чай</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}/>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <FindPost/>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/users">Пользователи</Nav.Link>
                            <Nav.Link as={Link} to="/liked">Понравившиеся</Nav.Link>
                            <Nav.Link as={Link} to="/favorited">Сохранённые</Nav.Link>
                            <Nav.Link as={Link} to="/create">Новый_пост</Nav.Link>
                            <Nav.Link as={Link} to="/profile">Профиль</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </>)
}
export default ForumNavbar