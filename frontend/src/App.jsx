import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PostDetails from "./pages/PostDetails"
import CreatePost from "./pages/CreatePost"
import EditPost from "./pages/EditPost"


const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
        <Route exact path="/write" element={<CreatePost/>}/>
        <Route exact path="/edit/:id" element={<EditPost/>}/>
      </Routes>
    </div>
  )
}

export default App