import {  Routes,  Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Promotion from "./Pages/Promotion/Promotion";
import UserPrivateRoute from "./PrivateRoute/UserPrivateRoute";
import LoginPrivateRoute from "./PrivateRoute/LoginPrivateRoute";
import Profile from "./user/Profile/Profile";
import Layout from './Layout/Layout';
import NewProducts from "./Pages/NewProducts/NewProducts";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<UserPrivateRoute />}>
        <Route path="/" element={<Layout />}>
        <Route path="/promotion" element={<Promotion />} />
        </Route>
        <Route path="/" element={<Layout />}>
        <Route path="/newItems" element={<NewProducts/>} />
        </Route>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/contactUs" element={<Contact/>} />
        <Route element={<LoginPrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
