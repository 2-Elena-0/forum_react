import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Posts} from "./Components/posts/Posts";
import ForumNavbar from "./Components/Navbar/ForumNavbar.tsx";
import {Route, Routes} from "react-router";
import {Post} from "./Components/posts/Post.tsx";
import {Profile} from "./Components/Profile/Profile.tsx";
import {Users} from "./Components/Users/Users.tsx";
import {CreatePost} from "./Components/posts/CreatePost/CreatePost.tsx";

function App() {
    return (
        <>
            <ForumNavbar/>
            <Routes>
                <Route path="/" element={<Posts />}/>
                <Route path="/post" element={<Post />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/users" element={<Users />}/>
                <Route path="/create" element={<CreatePost />}/>
            </Routes>
        </>
    )
}

export default App
