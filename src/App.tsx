import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Posts} from "./Components/posts/Posts";
import ForumNavbar from "./Components/Navbar/ForumNavbar.tsx";
import {Route, Routes} from "react-router";
import {Post} from "./Components/posts/Post.tsx";
import {Profile} from "./Components/Profile/Profile.tsx";
import {Users} from "./Components/Users/Users.tsx";
import {CreatePost} from "./Components/posts/CreatePost/CreatePost.tsx";
import {SignIn} from "./Components/Account/SignIn.tsx";
import {SignUp} from "./Components/Account/SignUp.tsx";
import {User} from "./Components/Profile/User.tsx";
import {NotFound} from "./Components/NotFound/NotFound.tsx";
import {LikedPosts} from "./Components/posts/LikedPosts.tsx";
import {FavoritedPosts} from "./Components/posts/FavoritedPosts.tsx";
import {UpdatePost} from "./Components/posts/CreatePost/UpdatePost.tsx";
import {Interesting} from "./Components/posts/Interesting.tsx";

function App() {
    return (
        <>
            <ForumNavbar/>
            <Routes>
                <Route path="/" element={<Posts />}/>
                <Route path="/post" element={<Post />}/>
                <Route path="/liked" element={<LikedPosts />}/>
                <Route path="/favorited" element={<FavoritedPosts />}/>
                <Route path="/interesting" element={<Interesting />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/user" element={<User />}/>
                <Route path="/users" element={<Users />}/>
                <Route path="/create" element={<CreatePost />}/>
                <Route path="/update-post" element={<UpdatePost />}/>
                <Route path="/sign-in" element={<SignIn />}/>
                <Route path="/sign-up" element={<SignUp />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
