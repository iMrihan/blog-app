import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import CreateBlog from "./components/CreateBlog";
import BlogList from "./components/BlogList";
import UpdateBlog from "./components/UpdateBlog";
import CreateReview from "./components/CreateReview";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/create-review/:id" element={<CreateReview />} />
          <Route path="/update/:id" element={<UpdateBlog />} />
          <Route path="/logout" element={<h1>Logout Component</h1>} />
        </Route>
        <Route path="/" element={<BlogList />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
