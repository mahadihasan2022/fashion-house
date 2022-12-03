import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Promotion from "./Pages/Promotion/Promotion";
import UserPrivateRoute from "./PrivateRoute/UserPrivateRoute";
import LoginPrivateRoute from "./PrivateRoute/LoginPrivateRoute";
import Profile from "./user/Profile/Profile";
import Layout from "./Layout/Layout";
import NewProducts from "./Pages/NewProducts/NewProducts";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import ManCollections from "./Pages/ManCollections/ManCollections";
import WomanCollections from "./Pages/WomanCollections/WomanCollections";
import KidCollections from "./Pages/KidCollections/KidCollections";
import WinterCollection from "./Pages/WinterCollections/WinterCollection";
import SummerCollections from "./Pages/SummerCollection/SummerCollections";
import Shirt from "./Others/Shirt/Shirt";
import Pant from "./Others/Pant/Pant";
import Saree from "./Others/Saree/Saree";
import Tshirt from "./Others/Tshirt/Tshirt";
import Panjabi from "./Others/Panjabi/Panjabi";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/saree" element={<Saree/>} />
          <Route path="/shirt" element={<Shirt/>} />
          <Route path="/pant" element={<Pant/>} />
          <Route path="/Tshirt" element={<Tshirt/>} />
          <Route path="/panjabi" element={<Panjabi/>} />
          <Route path="/manCollections" element={<ManCollections />} />
          <Route path="/womanCollections" element={<WomanCollections />} />
          <Route path="/kidsCollections" element={<KidCollections />} />
          <Route path="/winterCollections" element={<WinterCollection />} />
          <Route path="/summerCollections" element={<SummerCollections />} />
        </Route>
        <Route element={<UserPrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="/promotion" element={<Promotion />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="/newItems" element={<NewProducts />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route element={<LoginPrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
