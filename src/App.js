import {
  Outlet,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import LeftBar from "./Header/LeftBar/LeftBar";
import Navbar from "./Header/NavBar/Navbar";
import RightBar from "./Header/RightBar/RightBar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Promotion from "./Pages/Promotion/Promotion";
import SignUp from "./Pages/SignUp/SignUp";
import UserPrivateRoute from "./PrivateRoute/UserPrivateRoute";
import LoginPrivateRoute from "./PrivateRoute/LoginPrivateRoute";
import Profile from "./user/Profile/Profile";
import Layout from './Layout/Layout';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<UserPrivateRoute />}>
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route element={<LoginPrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
